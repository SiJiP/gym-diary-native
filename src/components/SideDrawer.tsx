import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PersonalDiary from './PersonalDiary';

const Drawer = createDrawerNavigator();

const GD_SideDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Diary">
      <Drawer.Screen name="Diary" component={PersonalDiary} />
    </Drawer.Navigator>
  );
};

export default GD_SideDrawer;
