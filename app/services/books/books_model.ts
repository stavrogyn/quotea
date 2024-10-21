
  import { createEvent, createStore, sample } from "effector";

  type Books = { title: string; image: string };

  const $booksList = createStore<Books[]>([]);

  const setBooks = createEvent<Books>();

  sample({
    clock: setBooks,
    source: $booksList,
    fn: (books, book) => [...books, book],
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
