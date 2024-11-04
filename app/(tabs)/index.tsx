import React from 'react';
import { useFonts } from "expo-font";
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Gantari_300Light_Italic, Gantari_300Light } from "@expo-google-fonts/gantari";
import { Outfit_500Medium, Outfit_400Regular } from "@expo-google-fonts/outfit";

import { authorsService } from '@/app/services/authors';
import { booksService } from '../services/books';

const { BooksFlatListWidget } = booksService.widgets
const { AuthorsFlatListWidget } = authorsService.widgets

const DailyQuote = () => {
  return (
    <>
      {/* <ImageBackground source={require('@/assets/images/bg.png')} style={{ position: "absolute" }} /> */}
      <Text style={styles.quote}>
        <Text style={styles.quoteComma}>“</Text>To live is to suffer, to survive is to find some meaning in the suffering.<Text style={styles.quoteComma}>”</Text>
      </Text>
      <View style={{ display: "flex", flexDirection: "column"}}>
        <View style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", marginTop: 30}}>
          <Text style={styles.quoteAuthor}>— Friedrich Nietzsche</Text>
        </View>
        <View style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", marginTop: 30}}>
          <Image source={require('@/assets/images/bookmark_icon.svg')} style={{ width: 18, height: 22}} />
        </View>
      </View>
    </>
  )
}

const Subscription = () => {
  return (
    <TouchableOpacity style={styles.subscriptionButton}>
      <Text style={styles.subscriptionText}>Get a subscription</Text>
    </TouchableOpacity>
  )
}

const Journal = () => {
  const journalEntries = [
    { title: 'Socrates\' contributions to philosophy', reads: '11k' },
    { title: 'Popular books of the 19th century' },
  ];

  return (
    <View style={styles.journalSection}>
      <Text style={styles.sectionTitle}>Quotea journal</Text>
      {journalEntries.map((entry, index) => (
        <View key={index} style={styles.journalItem}>
          <Text style={styles.journalTitle}>{entry.title}</Text>
          {entry.reads && <Text style={styles.journalReads}>{entry.reads}</Text>}
        </View>
      ))}
    </View>
  )
}

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

  return (
    <HomeScreenLayout
      favoriteAuthorsSlot={<AuthorsFlatListWidget title="Your authors" />}
      booksSlot={<BooksFlatListWidget />}
      popularAuthorsSlot={<AuthorsFlatListWidget title="Popular authors" />}
      dailyQuoteSlot={<DailyQuote />}
      subscriptionSlot={<Subscription />}
      journal={<Journal />}
    />
  );
};

const HomeScreenLayout = ({
  favoriteAuthorsSlot,
  booksSlot,
  popularAuthorsSlot,
  dailyQuoteSlot,
  subscriptionSlot,
  journal
}: {
  dailyQuoteSlot: React.JSX.Element,
  favoriteAuthorsSlot: React.JSX.Element,
  booksSlot: React.JSX.Element,
  popularAuthorsSlot: React.JSX.Element
  subscriptionSlot: React.JSX.Element
  journal: React.JSX.Element
}) => {
  return (
    <ScrollView style={styles.layout}>
      <Header />
      <View style={styles.container}>
        {dailyQuoteSlot}
        <View style={styles.favoriteAuthorsSlot}>{favoriteAuthorsSlot}</View>
        <View style={styles.bookSlot}>{booksSlot}</View>
        <View style={styles.popularAuthorsSlot}>{popularAuthorsSlot}</View>
        <View style={styles.subscriptionSlot}>{subscriptionSlot}</View>
        <View style={styles.journal}>{journal}</View>
      </View>
    </ScrollView>
  )
}

function Header () {
  return (
    <View style={styles.header}>
      <Image source={require('@/assets/images/logo.png')} style={styles.headerLogo} />
      <Image source={require('@/assets/images/account.png')} style={styles.headerAccount} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Gantari_300Light_Italic",
    marginTop: 32
  },
  layout: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#202226',
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerLogo: {
    width: 24,
    height: 34,
  },
  headerAccount: {
    width: 36,
    height: 36,
  },
  journal: {
    marginTop: 64,
  },
  subscriptionSlot: {
    marginTop: 64,
  },
  favoriteAuthorsSlot: {
    marginTop: 50,
  },
  bookSlot: {
    marginTop: 64,
  },
  popularAuthorsSlot: {
    marginTop: 64,
  },
  quoteSection: {
    marginBottom: 24,
  },
  quote: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: "Outfit_500Medium",
    textAlign: "left"
  },
  quoteComma: {
    color: "#EE7828",
    padding: 2,
    textAlign: "left"
  },
  quoteAuthor: {
    color: '#A9A9A9',
    fontSize: 16,
    fontFamily: "Gantari_300Light_Italic",
    marginTop: 32
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
