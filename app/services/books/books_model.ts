
  import { createEvent, createStore, sample } from "effector";

  type Books = { name: string; };

  const $booksList = createStore<Books[]>([]);

  const setBooks = createEvent<Books>();

  sample({
    clock: setBooks,
    source: $booksList,
    fn: (bookss, books) => [...bookss, books],
    target: $booksList
  })


  const outputs = {
    $booksList
  };

  const inputs = {
    setBooks
  };
  
  export const booksModel = {
    outputs,
    inputs,
  }