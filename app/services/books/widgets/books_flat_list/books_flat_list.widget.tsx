import { StyleSheet, Text, View } from "react-native"
import { BooksContainer } from "../../containers"

export const BooksFlatListWidget = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Quotes by books</Text>
      <BooksContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: "Outfit_400Regular"
  },
});
