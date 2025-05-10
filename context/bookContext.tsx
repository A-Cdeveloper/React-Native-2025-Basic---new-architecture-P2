import { createContext, use, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { AppwriteException, ID, Permission, Query, Role } from "appwrite";
import { ErrorType, useUserContext } from "./userContext";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID as string;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID as string;

export type Book = {
  $id: string;
  $createdAt: string;
  title: string;
  author: string;
  userId: string;
  // Add more fields as needed
};

type BooksContextType = {
  books: Book[];
  fetchBooks: () => Promise<void>;
  fetchBookById: (id: string) => Promise<Book | null>;
  createBook: (data: Book) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
};

export const BooksContext = createContext<BooksContextType | null>(null);

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);
  const { user } = useUserContext();

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user?.$id as string)]
      );

      const books = response.documents as unknown as Book[];
      setBooks(books);
    } catch (error: unknown) {
      if (error instanceof AppwriteException) {
        throw {
          type: error.type || "AppwriteException",
          message: error.message,
          code: error.code,
        } as ErrorType;
      }
    }
  }

  async function fetchBookById(id: string): Promise<Book | null> {
    try {
      const book = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id);
      return book as unknown as Book;
    } catch (error) {
      if (error instanceof AppwriteException && error.code === 404) {
        return null;
      }
      console.log(error);
      return null;
    }
  }

  async function createBook(data: Book) {
    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user?.$id },
        [
          Permission.read(Role.user(user?.$id as string)),
          Permission.update(Role.user(user?.$id as string)),
          Permission.delete(Role.user(user?.$id as string)),
        ]
      );
    } catch (error: unknown) {
      if (error instanceof AppwriteException) {
        throw {
          type: error.type || "AppwriteException",
          message: error.message,
          code: error.code,
        } as ErrorType;
      }
    }
  }

  async function deleteBook(id: string) {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
      setBooks((prev) => prev.filter((book) => book.$id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user) {
      fetchBooks();
    }
  }, [books, user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export const useBooksContext = () => {
  const context = use(BooksContext);

  if (!context) {
    throw new Error("useBooksContext must be used within a BooksProvider");
  }
  return context;
};
