import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/home';
import AccountSettings from './components/accountSettings';
import StyledDrawer from './components/drawer';
import Parse, { User } from "parse/react-native";



const Drawer = createDrawerNavigator();

export default function Main(){

    return(
        <Drawer.Navigator initialRouteName='Home' drawerStyle={{backgroundColor: '#18181B'}} drawerContent={(props)=> <StyledDrawer {...props}></StyledDrawer>}>
            <Drawer.Screen
            name="Home"
            component={Home}
            />
            <Drawer.Screen
                name="Account Settings"
                component={AccountSettings}
            />
        </Drawer.Navigator>
    )
}