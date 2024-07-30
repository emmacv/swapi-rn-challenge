import React from "react";
import { Text, FlatList, View } from "react-native";
import Card from "../../components/card";
import useSwapi from "../../hooks/useSwapi";
import { People } from "../../types/people";
import globalTheme from "../../theme";
import { ViewProps } from "../../types/routes";
import LoadingTemplate from "../../templates/loading";

type Props = ViewProps<"People">;

const PeopleView = ({ route }: Props) => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useSwapi<People>(
    route.params.name
  );

  if (isLoading) return <LoadingTemplate />;

  const handleGetNextPage = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  return (
    <FlatList
      data={data?.pages.flatMap(item => item.data.results)}
      renderItem={({ item: person }) => (
        <Card>
          <Text style={globalTheme.text}>Name: {person.name}</Text>
          <Text style={globalTheme.text}>Gender: {person.gender}</Text>
          <Text style={globalTheme.text}>Height: {person.height}</Text>
        </Card>
      )}
      keyExtractor={item => item.name}
      onEndReached={handleGetNextPage}
      contentContainerStyle={{
        padding: 20,
      }}
    />
  );
};

export default PeopleView;
