import { FlatList } from "react-native";
import { useUnit } from "effector-react";

import { AuthorCard } from "../../components";
import { authorsModel } from "../../authors.model";

export const AuthorsListContainer = () => {
  const authors = useUnit(authorsModel.outputs.$authorsList)

  return (
    <FlatList
      data={authors}
      renderItem={AuthorCard}
      keyExtractor={(item) => item.name + item.surname}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}
