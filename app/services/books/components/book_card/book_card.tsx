
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
    width: 112,
    height: 230
  },
  bookImage: {
    width: 112,
    height: 164,
    marginBottom: 8,
    objectFit: 'cover',
  },
  bookTitle: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: "Gantari_300Light",
  }
});
