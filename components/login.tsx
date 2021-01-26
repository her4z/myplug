import React from 'react';
import stylesLogin from '../styles/login_css';
import { View, TextInput, Image, Text} from 'react-native';
import * as Font from 'expo-font';
import {Button} from 'react-native-elements';
import Parse, { User } from "parse/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize("5VkdWJ3nBCqG3OzurM86MNPEtRudm7eTcWPXLYIr", "iurB11v84oyOQWyqrSyGvaSwp6tQKBakg8vyEIge");
Parse.serverURL = 'https://parseapi.back4app.com/';

interface Props{
    navigation: any
}
class Login extends React.Component<Props> {

    state={
        user: '',
        password: '',
        isButtonLoading: false,
        fontsLoaded: false,
        showToast: 'none'
    };

    componentDidMount(){
        this.loadFonts();
    }


    async loadFonts(){
        await Font.loadAsync({
            'Raleway-Light':{
                uri: require('../assets/fonts/Raleway-Light.ttf')
            },
            'Raleway-Medium':{
                uri: require('../assets/fonts/Raleway-Medium.ttf')
            },
            'Roboto-Regular':{
                uri: require('../assets/fonts/Roboto-Regular.ttf')
            }
        });
        this.setState({
            fontsLoaded: true
        });
    }
    

    async buttonClicked(){
        this.setState({isButtonLoading: true});
        
        await Parse.User.logIn(this.state.user, this.state.password)
        .then( ()=>{
            this.props.navigation.navigate('Home', {toast: true});
        }).catch( (err)=>{
            let errorMessage = err.message.charAt(0).toUpperCase() + err.message.slice(1);
            this.setState({showToast: 'block'});
            Toast.show({
                type: 'error',
                text1: 'Login failed',
                text2: errorMessage,
                visibilityTime: 3000,
                position: 'bottom',
                bottomOffset: 80
            }
            );

        })
        this.setState({isButtonLoading: false});
    }
    
    render(){
        if(this.state.fontsLoaded){
            return(
                <View style={stylesLogin.login}>
                    <Image source={require('../assets/logo1.png')} style={stylesLogin.logo}></Image>
                    <Text style={stylesLogin.brand}>My Plug</Text>
                    <TextInput style={stylesLogin.textinputUser} placeholder=" User" autoCapitalize="none" value={this.state.user} onChangeText={(e)=> this.setState({user: e})}></TextInput>
                    <TextInput style={stylesLogin.textinputPassword} placeholder=" Password" secureTextEntry={true} autoCapitalize="none" value={this.state.password} onChangeText={(e) => this.setState({password: e})}></TextInput>
                    <View style={stylesLogin.buttonLogin}>
                        <Button title="Log in" type="solid" buttonStyle={{borderRadius: 4}} raised={true} loading={this.state.isButtonLoading} onPress={() => this.buttonClicked()}></Button>
                    </View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </View>
            )
        }else{
            return null;
        }
    }
}
export default Login