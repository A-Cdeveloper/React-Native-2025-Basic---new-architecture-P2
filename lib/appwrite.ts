import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)
  .setPlatform(process.env.NEXT_PUBLIC_APPWRITE_PLATFORM as string);

export const account = new Account(client);
export const avatars = new Avatars(client);
