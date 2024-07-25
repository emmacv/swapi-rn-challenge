import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import PeopleView from './app/views/people';
import PlanetsView from './app/views/planets';
import SpaceshipView from './app/views/spaceships';

const Tab = createBottomTabNavigator();

const Navigations = (): React.JSX.Element => (
  <Tab.Navigator>
    <Tab.Screen name="People" component={PeopleView} />
    <Tab.Screen name="Planets" component={PlanetsView} />
    <Tab.Screen name="Spaceships" component={SpaceshipView} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Navigations />
  </NavigationContainer>
);

export default App;
