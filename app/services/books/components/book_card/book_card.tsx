
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type BookItem = {
  item: {
    image: any;
    title: string;
  };
};

export const BookCard = ({ item }: BookItem) => (
  <View style={styles.bookItem}>
    <Image source={item.image} style={styles.bookImage} />
    <Text style={styles.bookTitle}>{item.title}</Text>
  </View>
);
  
const styles = StyleSheet.create({
  bookItem: {
    marginRight: 16,
  },
  bookImage: {
    width: 100,
    height: 150,
    marginBottom: 8,
  },
  bookTitle: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: "Outfit_500Medium",
  }
});
