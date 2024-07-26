import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import PeopleView from './app/views/people';
import PlanetsView from './app/views/planets';
import SpaceshipView from './app/views/spaceships';
import { Text } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Tab = createBottomTabNavigator();

const config:
  Record<Lowercase<'People' | 'Planets' | 'Spaceships'>, React.ComponentPropsWithoutRef<typeof Tab.Screen>['options']> = {
    people: {
      tabBarIcon: () => <Text>People</Text>
    },
    planets: {
      tabBarIcon: () => <Text>Planets</Text>
    },
    spaceships: {
      tabBarIcon: () => <Text>Spaceships</Text>
    },
};

const Navigations = (): React.JSX.Element => (
  <Tab.Navigator screenOptions={{
    headerShown: false,
    headerStyle: {
      shadowColor: 'transparent'
    },
  }}>
    <Tab.Screen name="People" component={PeopleView} options={config.people} />
    <Tab.Screen name="Planets" component={PlanetsView} options={config.planets} />
    <Tab.Screen name="Spaceships" component={SpaceshipView} options={config.spaceships} />
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
