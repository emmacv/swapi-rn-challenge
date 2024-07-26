import React from "react";
import { Text, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Card from "../../components/card";
import Container from "../../components/container";
import useSwapi from "../../hooks/useSwapi";
import { Planets } from "../../types/planets";

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
      {isError && <Text style={styles.text}>Error Fetching data</Text>}
      <FlatList
        data={data?.pages.flatMap(item => item.data.results)}
        renderItem={({ item: planet }) => {
          return (
            <Card>
              <Text style={styles.text}>name: {planet.name}</Text>
              <Text style={styles.text}>Population: {planet.population}</Text>
              <Text style={styles.text}>
                Rotation period: {planet.rotation_period}
              </Text>
              <Text style={styles.text}>Diameter: {planet.diameter}</Text>
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

const styles = StyleSheet.create({
  text: {
    color: "#ffffffda",
  },
});
