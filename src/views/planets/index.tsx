import React from "react";
import { Text, ActivityIndicator, FlatList } from "react-native";
import Card from "../../components/card";
import useSwapi from "../../hooks/useSwapi";
import { Planets } from "../../types/planets";
import globalTheme from "../../theme";
import { ViewProps } from "../../types/routes";

type Props = ViewProps<"Planets">;

const PlanetsScreen = ({ route }: Props) => {
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useSwapi<Planets>(route.params.name);

  if (isLoading) return <ActivityIndicator />;

  const handleGetNextPage = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  return (
    <FlatList
      data={data?.pages.flatMap(item => item.data.results)}
      renderItem={({ item: planet }) => {
        return (
          <Card>
            <Text style={globalTheme.text}>name: {planet.name}</Text>
            <Text style={globalTheme.text}>
              Population: {planet.population}
            </Text>
            <Text style={globalTheme.text}>
              Rotation period: {planet.rotation_period}
            </Text>
            <Text style={globalTheme.text}>Diameter: {planet.diameter}</Text>
          </Card>
        );
      }}
      keyExtractor={item => item.name}
      onEndReached={handleGetNextPage}
      contentContainerStyle={{
        padding: 20,
      }}
    />
  );
};

export default PlanetsScreen;
