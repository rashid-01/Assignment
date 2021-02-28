import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './Navigations/DrawerNavigation';
import TabNavigator from './Navigations/TabNavigator';

const App = () => {
    return (
        <NavigationContainer>
            {/* <DrawerNavigator /> */}
            <TabNavigator/>
        </NavigationContainer>
    )
}

export default App;