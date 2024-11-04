import { Image, StyleSheet, Text, View, Dimensions } from "react-native"

import { AuthorsListContainer } from "../../containers"

type AuthorsFlatListWidgetProps = {
  title?: string;
}

const screenWidth = Dimensions.get('window').width;

export const AuthorsFlatListWidget = ({ title }: AuthorsFlatListWidgetProps) => {
  return (
    <View style={styles.section}>
      <View style={styles.titleSection}>
        {title && <Text style={styles.sectionTitle}>{title}</Text>}
        {title && <Image source={require('@/assets/images/right_arrow_icon.svg')} style={{ width: 9, height: 18 }} />}
      </View>
      <AuthorsListContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    position: 'relative',
    // width: screenWidth,
    // left: -20,
  },
  titleSection: {
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    // paddingHorizontal: 20,
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: "Outfit_400Regular"
  },
});
