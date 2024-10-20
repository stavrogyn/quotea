import { createEvent, createStore, sample } from "effector";
import { Author } from "../../types";

const BIRTH: Pick<Author, 'birthDate' | 'birthMonth' | 'birthYear'>= {
  birthDate: 14,
  birthMonth: 4,
  birthYear: 1994
}

const AUTHORS: Author[] = [
  { name: 'Lev', surname: 'Tolstoy', image: require('@/assets/images/authors/tolstoy.png'), ...BIRTH },
  { name: 'George', surname: 'Orwell', image: require('@/assets/images/authors/orwell.png'), ...BIRTH },
  { name: 'Jules', surname: 'Verne', image: require('@/assets/images/authors/verne.png'), ...BIRTH },
];

const $authorsList = createStore<Author[]>(AUTHORS);

const setAuthor = createEvent<Author>();

sample({
  clock: setAuthor,
  source: $authorsList,
  fn: (authors, author) => [...authors, author],
  target: $authorsList
})

const outputs = {
  $authorsList
}

const inputs = {
  setAuthor
}

export const authorsModel = {
  outputs,
  inputs
}
