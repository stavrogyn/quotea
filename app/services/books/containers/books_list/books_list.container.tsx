
import React from 'react';
import { useUnit } from 'effector-react';
import { FlatList } from 'react-native';

import { BookCard } from '../../components';
import { booksModel } from '../../books_model';
    
export const BooksContainer = () => {
  const books = useUnit(booksModel.outputs.$booksList)

  return (
    <FlatList
      data={books}
      renderItem={BookCard}
      keyExtractor={(item) => item.title}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
  