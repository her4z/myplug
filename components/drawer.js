import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import Parse, { User } from "parse/react-native";
import { Avatar } from 'react-native-elements';
import stylesDrawer from '../styles/drawer_css';


function StyledDrawer({...props}){
    return(
        <DrawerContentScrollView {...props} test="hola">
            <Avatar rounded size={95} source={{uri: `${Parse.User.current()?.get('image')?.url()}`}} containerStyle={stylesDrawer.avatar} onPress={()=> props.navigation.navigate('Account Settings')}></Avatar>
            <Text style={stylesDrawer.textUsername}>{Parse.User.current()?.getUsername()}</Text>
            <DrawerItemList {...props}></DrawerItemList>
            <DrawerItem label="My Shopping/Trades"></DrawerItem>
            <DrawerItem label="My Sells"></DrawerItem>
            <DrawerItem label="Tems & Conditions"></DrawerItem>
            <DrawerItem label="Log out" style={stylesDrawer.itemLogout} labelStyle={stylesDrawer.textLogout} onPress={()=>{Parse.User.logOut(); props.navigation.navigate('Login');}}>
            </DrawerItem>
        </DrawerContentScrollView>
    )
}

export default StyledDrawer;