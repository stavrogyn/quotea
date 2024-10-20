import React from 'react';
import { useFonts } from "expo-font";
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Gantari_300Light_Italic, Gantari_300Light } from "@expo-google-fonts/gantari";
import { Outfit_500Medium, Outfit_400Regular } from "@expo-google-fonts/outfit";

import { authorsService } from '@/app/services/authors';
const { AuthorsFlatListWidget } = authorsService.widgets

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    Gantari_300Light,
    Gantari_300Light_Italic,
    Outfit_400Regular,
    Outfit_500Medium,
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  const authors = [
    { name: 'Lev Tolstoy', image: require('@/assets/images/authors/tolstoy.png') },
    { name: 'George Orwell', image: require('@/assets/images/authors/orwell.png') },
    { name: 'Jules Verne', image: require('@/assets/images/authors/verne.png') },
  ];

  const books = [
    { title: 'Anna Karenina', image: require('@/assets/images/books/anna_karenina.png') },
    { title: 'Crime and Punishment', image: require('@/assets/images/books/crime_punishment.png') },
    { title: 'The Great Gatsby', image: require('@/assets/images/books/great_gatsby.png') },
  ];

  const journalEntries = [
    { title: 'Socrates\' contributions to philosophy', reads: '11k' },
    { title: 'Popular books of the 19th century' },
  ];

  const renderBooks = ({ item }: Record<'item', { image: any, title: string }>) => (
    <View style={styles.bookItem}>
      <Image source={item.image} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.quoteSection}>
        <Text style={styles.quote}>
          "To live is to suffer, to survive is to find some meaning in the suffering."
        </Text>
        <Text style={styles.quoteAuthor}>— Friedrich Nietzsche</Text>
      </View>

      <AuthorsFlatListWidget title="Your authors" />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quotes by books</Text>
        <FlatList
          data={books}
          renderItem={renderBooks}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <AuthorsFlatListWidget title="Popular authors" />

      <View style={styles.journalSection}>
        <Text style={styles.sectionTitle}>Quotea journal</Text>
        {journalEntries.map((entry, index) => (
          <View key={index} style={styles.journalItem}>
            <Text style={styles.journalTitle}>{entry.title}</Text>
            {entry.reads && <Text style={styles.journalReads}>{entry.reads}</Text>}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.subscriptionButton}>
        <Text style={styles.subscriptionText}>Get a subscription</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    paddingVertical: 16,
    paddingHorizontal: 28,
    fontFamily: "Gantari_300Light_Italic",
  },
  quoteSection: {
    marginBottom: 24,
  },
  quote: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  quoteAuthor: {
    color: '#A9A9A9',
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
    fontFamily: "Outfit_500Medium",
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  authorItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  authorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  authorName: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
  },
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
    // fontFamily: "Outfit_500Medium",
  },
  journalSection: {
    marginBottom: 24,
  },
  journalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  journalTitle: {
    color: '#FFF',
    fontSize: 16,
  },
  journalReads: {
    color: '#FFA500',
    fontSize: 12,
  },
  subscriptionButton: {
    backgroundColor: '#FFA500',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  subscriptionText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
