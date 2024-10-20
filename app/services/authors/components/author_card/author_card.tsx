import { Author } from "@/app/types";
import { Image, StyleSheet, Text, View } from "react-native";

type AuthorItem = {
  item: Author
}

export const AuthorCard = ({ item: { name, surname, image } }: AuthorItem) => (
  <View style={styles.authorItem}>
    <Image source={image} style={styles.authorImage} />
    <Text style={styles.authorName}>{`${name} ${surname}`}</Text>
  </View>
);

const styles = StyleSheet.create({
  authorItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  authorImage: {
    width: 96,
    height: 96,
    borderRadius: 60,
    marginBottom: 8,
  },
  authorName: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: "Gantari_300Light"
  }
});
