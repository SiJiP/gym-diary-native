import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Header } from 'react-native-elements';

const MenuIcon = () => {
  const navigation = useNavigation<NavigationStackProp>();

  return (
    <Icon
      size={26}
      color="#fff"
      name="menu-sharp"
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

const GD_MainHeader = () => {
  return <Header placement="left" leftComponent={<MenuIcon />} />;
};

export default GD_MainHeader;
