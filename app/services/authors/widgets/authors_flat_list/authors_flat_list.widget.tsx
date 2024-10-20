import { StyleSheet, Text, View } from "react-native"
import { AuthorsListContainer } from "../../containers"

type AuthorsFlatListWidgetProps = {
  title?: string;
}

export const AuthorsFlatListWidget = ({ title }: AuthorsFlatListWidgetProps) => {
  return (
    <View style={styles.section}>
      {title && <Text style={styles.sectionTitle}>{title}</Text>}
      <AuthorsListContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: "Outfit_400Regular"
  },
});
