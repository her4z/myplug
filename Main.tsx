import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/home';
import AccountSettings from './components/accountSettings';


const Drawer = createDrawerNavigator();

export default function Main(){

    return(
        <Drawer.Navigator initialRouteName='Home' drawerStyle={{backgroundColor: '#022933'}} >
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