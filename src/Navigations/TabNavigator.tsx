import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstScreen from '../Screens/FirstScreen/FirstScreen';
import SecondScreen from '../Screens/SecondScreen/SecondScreen';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThirdScreen from '../Screens/ThirdScreen/ThirdScreen';
import FourthScreen from '../Screens/FourthScreen/FourthScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'Third'}
                tabBarOptions={{
                    activeTintColor: '#8739F9',
                    inactiveTintColor: '#363636',
                    style: {
                        backgroundColor: '#100F10',
                        borderTopColor: '#100F10'
                    }
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'First') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Second') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (route.name === 'Third') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    }
              })}
            >
                <Tab.Screen name='First' options={{tabBarLabel:''}} component={FirstScreen} />
                <Tab.Screen name='Second' options={{tabBarLabel:''}} component={SecondScreen} />
                <Tab.Screen name='Third' options={{tabBarLabel:''}} component={ThirdScreen} />
                {/* <Tab.Screen name='Fourth' options={{tabBarLabel:''}} component={FourthScreen}/> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}