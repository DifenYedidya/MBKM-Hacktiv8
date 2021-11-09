import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator }from '@react-navigation/bottom-tabs'

// import Icon from 'react-native-vector-icons/AntDesign'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home'
import PostPage from './PostPage'

// const Stack = createStackNavigator();
// const Stack = createDrawerNavigator();
// const Stack = createMaterialTopTabNavigator();
const Stack = createBottomTabNavigator();

const Router = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                    return (
                        <Ionicons
                            name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'}
                            size={size}
                            color={color}
                        />
                    );
                    } else if (route.name === 'PostPage') {
                    return (
                        <Ionicons
                            name={focused ? 'list-circle-outline' : 'list-outline'}
                            size={size}
                            color={color}
                        />
                    );
                    }
                },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'tomato',
                })}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PostPage" component={PostPage} />
            </Stack.Navigator>
        </NavigationContainer>
     );
}

export default Router;