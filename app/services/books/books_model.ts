
  import { createEvent, createStore, sample } from "effector";

  const books = [
    { title: 'Anna Karenina', image: require('@/assets/images/books/anna_karenina.png') },
    { title: 'Crime and Punishment', image: require('@/assets/images/books/crime_punishment.png') },
    { title: 'The Great Gatsby', image: require('@/assets/images/books/great_gatsby.png') },
  ];

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
