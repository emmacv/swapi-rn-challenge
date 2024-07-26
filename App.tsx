import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import PeopleView from "./src/views/people";
import PlanetsView from "./src/views/planets";
import SpaceshipView from "./src/views/spaceships";
import { Text } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Tab = createBottomTabNavigator();

const Navigations = (): React.JSX.Element => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: {
        shadowColor: "transparent",
      },
    }}
  >
    <Tab.Screen
      name="People"
      component={PeopleView}
      options={{
        tabBarIcon: () => <Text>People</Text>,
      }}
    />
    <Tab.Screen
      name="Planets"
      component={PlanetsView}
      options={{
        tabBarIcon: () => <Text>Planets</Text>,
      }}
    />
    <Tab.Screen
      name="Spaceships"
      component={SpaceshipView}
      options={{
        tabBarIcon: () => <Text>Spaceships</Text>,
      }}
    />
  </Tab.Navigator>
);

const queryClient = new QueryClient();

const App = () => (
  <NavigationContainer>
    <QueryClientProvider client={queryClient}>
      <Navigations />
    </QueryClientProvider>
  </NavigationContainer>
);

export default App;
