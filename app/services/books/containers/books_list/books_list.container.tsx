
import React from 'react';
import { useUnit } from 'effector-react';
import { FlatList, View } from 'react-native';

import { BookCard } from '../../components';
import { booksModel } from '../../books_model';
    
export const BooksContainer = () => {
  const books = useUnit(booksModel.outputs.$booksList)

  return (
    <FlatList
      data={books}
      renderItem={BookCard}
      keyExtractor={(item, index) => item.title + index}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
    />
  );
}
