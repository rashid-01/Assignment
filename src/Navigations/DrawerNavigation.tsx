import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import FirstScreen from '../Screens/FirstScreen/FirstScreen';
import SecondScreen from '../Screens/SecondScreen/SecondScreen';
import ThirdScreen from '../Screens/ThirdScreen/ThirdScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props:any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
    return (
        // <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName={'Settings'}>
                <Drawer.Screen name="Home" component={FirstScreen} />
                <Drawer.Screen name="Profile" component={SecondScreen} />
                <Drawer.Screen name="Settings" component={ThirdScreen} />
            </Drawer.Navigator>
        // </NavigationContainer>
    )
}