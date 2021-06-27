import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import PersonalDiary from './src/components/PersonalDiary';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator initialRouteName="Diary">
      <Drawer.Screen name="Diary" component={PersonalDiary} />
    </Drawer.Navigator>
  );
};

export default App;
