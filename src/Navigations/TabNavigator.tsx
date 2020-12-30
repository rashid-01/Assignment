import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstScreen from '../Screens/FirstScreen/FirstScreen';
import SecondScreen from '../Screens/SecondScreen/SecondScreen';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThirdScreen from '../Screens/ThirdScreen/ThirdScreen';
import FourthScreen from '../Screens/FourthScreen/FourthScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'Second'}
                tabBarOptions={{
                    activeTintColor: '#ffffff',
                    inactiveTintColor: 'gray',
                    style: {
                        backgroundColor:'#000000'
                    }
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'First') {
                            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                        } else if (route.name === 'Second') {
                            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
                        } else if (route.name === 'Third') {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (route.name === 'Fourth') {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    }
              })}
            >
                <Tab.Screen name='First' options={{tabBarLabel:''}} component={FirstScreen} />
                <Tab.Screen name='Second' options={{tabBarLabel:''}} component={SecondScreen} />
                <Tab.Screen name='Third' options={{tabBarLabel:''}} component={ThirdScreen} />
                <Tab.Screen name='Fourth' options={{tabBarLabel:''}} component={FourthScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}