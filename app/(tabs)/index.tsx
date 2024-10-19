import React from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
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

  const renderAuthors = ({ item }: Record<'item', { name: string, image: any, authorImage: string }>) => (
    <View style={styles.authorItem}>
      <Image source={item.image} style={styles.authorImage} />
      <Text style={styles.authorName}>{item.name}</Text>
    </View>
  );

  const renderBooks = ({ item }: Record<'item', { image: any, title: string }>) => (
    <View style={styles.bookItem}>
      <Image source={item.image} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </View>
  );

  const renderJournalEntries = ({ item }: Record<'item', { journalItem: string, title: string, reads: number }>) => (
    <View style={styles.journalItem}>
      <Text style={styles.journalTitle}>{item.title}</Text>
      {item.reads && <Text style={styles.journalReads}>{item.reads}</Text>}
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your authors</Text>
        <FlatList
          data={authors}
          renderItem={renderAuthors}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular authors</Text>
        <FlatList
          data={authors}
          renderItem={renderAuthors}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

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
    padding: 16,
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
