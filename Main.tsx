import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/home';
import AccountSettings from './components/accountSettings';
import StyledDrawer from './components/drawer';
import Parse, { User } from "parse/react-native";
import BuyerMain from './components/buyerMain';
import SellerMain from './components/sellerMain';
import SellerCreate1 from './components/sellerCreate1';
import { createStackNavigator } from '@react-navigation/stack';




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack(){
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Buyer Main" component={BuyerMain}/>
            <Stack.Screen name="Seller Stack" component={SellerStack}/>
        </Stack.Navigator>
    )
}

function SellerStack(){
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Seller Main" component={SellerMain}/>
            <Stack.Screen name="Seller Create1" component={SellerCreate1}/>
        </Stack.Navigator>
    )
}
export default function Main(){

    return(
        <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor: '#18181B'}} drawerContent={(props)=> <StyledDrawer {...props}></StyledDrawer>}>
            <Drawer.Screen
            name="Home"
            component={HomeStack}
            />
            <Drawer.Screen
                name="Account Settings"
                component={AccountSettings}
            />
        </Drawer.Navigator>
    )
}