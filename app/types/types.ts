import { ImageSourcePropType } from "react-native";

export interface Person {
  name: string;
  surname: string;
  birthYear: number
  birthDate: number
  birthMonth: number
  image: ImageSourcePropType;
}

export interface Page {
  number: number;
  content: string;
}

export interface Translatable {
  translator: Person | Person[]
  translationYear: number;
}

export type Book = {
  title: string;
  description: string;
  content: Page[]
}

export interface Author extends Person {
  books?: Book[]
  articles?: Book[]
}

export interface Quote {
  author: Author
  content: string;
}
