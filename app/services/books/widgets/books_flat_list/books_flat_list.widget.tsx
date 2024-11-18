import { Dimensions, StyleSheet, Text, View } from "react-native"
import { BooksContainer } from "../../containers"

const { width: screenWidth } = Dimensions.get('window');


export const BooksFlatListWidget = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Quotes by books</Text>
      <BooksContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    left: -24,
    width: screenWidth,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 24,
    fontFamily: "Outfit_400Regular"
  },
});
