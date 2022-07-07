import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EntriesScreen from '../Screens/Entries';
import RecordScreen from '../Screens/Records';
import MoodScreen from '../Screens/MoodScreen';
import CreateScreen from '../Screens/Create';
import TabNavigator from './TabNavigation';
import Day1 from '../Screens/Day1';
import Day2 from '../Screens/Day2';
import Day3 from '../Screens/Day3';
import Day4 from '../Screens/Day4';
import Day5 from '../Screens/Day5';
import Day6 from '../Screens/Day6';
import Record from "../Screens/Records"
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Entries" component={EntriesScreen} />
      
      <Stack.Screen name="MoodScreen" component={MoodScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Day1" component={Day1} />
      <Stack.Screen name="Day2" component={Day2} />
      <Stack.Screen name="Day3" component={Day3} />
      <Stack.Screen name="Day4" component={Day4} />
      <Stack.Screen name="Day5" component={Day5} />
      <Stack.Screen name="Day6" component={Day6} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
