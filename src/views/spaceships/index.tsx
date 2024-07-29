import React from "react";
import { Text, ActivityIndicator, FlatList } from "react-native";
import Card from "../../components/card";
import useSwapi from "../../hooks/useSwapi";
import { Starships } from "../../types/starshipts";
import globalTheme from "../../theme";
import { ViewProps } from "../../types/routes";

type Props = ViewProps<"Spaceships">;

const SpaceshipsView = ({ route }: Props) => {
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useSwapi<Starships>(route.params.name);

  if (isLoading) return <ActivityIndicator />;

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
          <Text style={globalTheme.text}>
            Cargo capacity: {person.cargo_capacity}
          </Text>
          <Text style={globalTheme.text}>Cost: {person.cost_in_credits}</Text>
          <Text style={globalTheme.text}>length: {person.length}</Text>
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

export default SpaceshipsView;
