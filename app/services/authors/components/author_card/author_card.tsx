import { Author } from "@/app/types";
import { Image, StyleSheet, Text, View } from "react-native";

type AuthorItem = {
  item: Author
}

export const AuthorCard = ({ item: { name, surname, image } }: AuthorItem) => (
  <View style={styles.authorItem}>
    <Image source={image} style={styles.authorImage} />
    <View style={styles.authorData}>
      <Text style={styles.authorName}>{name}</Text>
      {surname && <Text style={styles.authorName}>{surname}</Text>}
    </View>
  </View>
);

const styles = StyleSheet.create({
  authorItem: {
    alignItems: 'center',
    maxWidth: 112,
  },
  authorData: {

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
