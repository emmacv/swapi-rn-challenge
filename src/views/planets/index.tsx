import React from "react";
import { Text, ActivityIndicator, FlatList } from "react-native";
import Card from "../../components/card";
import Container from "../../components/container";
import useSwapi from "../../hooks/useSwapi";
import { Planets } from "../../types/planets";
import globalTheme from "../../theme";

const PeopleView = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useSwapi<Planets>("planets");

  if (isLoading) return <ActivityIndicator />;

  const handleGetNextPage = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  return (
    <Container title="Planets">
      {isError && <Text style={globalTheme.text}>Error Fetching data</Text>}
      <FlatList
        data={data?.pages.flatMap(item => item.data.results)}
        renderItem={({ item: planet }) => {
          return (
            <Card>
              <Text style={globalTheme.text}>name: {planet.name}</Text>
              <Text style={globalTheme.text}>Population: {planet.population}</Text>
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
    </Container>
  );
};

export default PeopleView;
