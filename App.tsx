import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';

// custom components
import PersonalDiary from './src/components/PersonalDiary';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <Drawer.Navigator initialRouteName="Diary">
        <Drawer.Screen name="Diary" component={PersonalDiary} />
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
};

export default App;
