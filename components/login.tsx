import React from 'react';
import stylesLogin from '../styles/login_css';
import { View, TextInput, Image, Text, Modal} from 'react-native';
import * as Font from 'expo-font';
import {Button, Card} from 'react-native-elements';
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
        registerUser: '',
        registerPassword: '',
        registerRePassword: '',
        isButtonLoading: false,
        isButtonLoading2: false,
        fontsLoaded: false,
        showToast: 'none',
        showModal: false
    };

    async componentDidMount(){
        await this.loadFonts();
        let user = await Parse.User.currentAsync();
        if(user){
            this.props.navigation.navigate('Main');
        }
    }


    async loadFonts(){
        await Font.loadAsync({
            'Raleway-Light':{
                uri: require('../assets/fonts/Raleway-Light.ttf')
            },
            'Raleway-Medium':{
                uri: require('../assets/fonts/Raleway-Medium.ttf')
            },
            'Raleway-Regular':{
                uri: require('../assets/fonts/Raleway-Regular.ttf')
            },
            'Roboto-Regular':{
                uri: require('../assets/fonts/Roboto-Regular.ttf')
            }
        });
        this.setState({
            fontsLoaded: true
        });

    }
    

    async loginButtonClicked(){
        this.setState({isButtonLoading: true});
        
        await Parse.User.logIn(this.state.user, this.state.password)
        .then( ()=>{
            this.props.navigation.navigate('Main');
            this.setState({user: '', password: ''});
        }).catch( (err)=>{
            let errorMessage = err.message.charAt(0).toUpperCase() + err.message.slice(1);
            this.setState({showToast: 'block'});
            Toast.show({
                type: 'error',
                text1: 'Login failed',
                text2: errorMessage,
                visibilityTime: 3000,
                position: 'top',
                topOffset: 75
            }
            );

        })
        this.setState({isButtonLoading: false});
    }

    registerButtonClicked(){
        this.setState({showModal: true});
    }

    async createAccount(){
        this.setState({isButtonLoading2: true});

        if(this.state.registerPassword === this.state.registerRePassword){
            let user = new Parse.User();
            user.set('username', this.state.registerUser);
            user.set('password', this.state.registerPassword);
    
            user.signUp()
            .then((user)=>{
                this.setState({
                    showModal: false,
                    isButtonLoading2: false,
                    registerUser: '',
                    registerPassword: '',
                    registerRePassword: ''
                });
                Toast.show({
                    type: 'success',
                    text1: 'Account created',
                    visibilityTime: 3000,
                    position: 'top',
                    topOffset: 75
        
                })
            }).catch((err)=>{
                let errorMessage = err.message.charAt(0).toUpperCase() + err.message.slice(1);
                this.setState({showToast: 'block'});
                Toast.show({
                    type: 'error',
                    text1: 'Account creation failed',
                    text2: errorMessage,
                    visibilityTime: 3000,
                    position: 'top',
                    topOffset: 75
                });
                this.setState({isButtonLoading2: false});
    
            })
        }else{
            Toast.show({
                type: 'error',
                text1: 'Account creation failed',
                text2: 'Both passwords must match',
                visibilityTime: 3000,
                position: 'top',
                topOffset: 75
            });
            this.setState({isButtonLoading2: false});
        }
    }
    
    render(){
        if(this.state.fontsLoaded && this.state.fontsLoaded === true){
            return(
                <View style={stylesLogin.login}>
                    <Image source={require('../assets/logo3.png')} style={stylesLogin.logo}></Image>
                    <Text style={stylesLogin.brand}>My Plug</Text>
                    <TextInput style={stylesLogin.textinputUser} placeholder=" User" autoCapitalize="none" value={this.state.user} onChangeText={(value)=> this.setState({user: value})}></TextInput>
                    <TextInput style={stylesLogin.textinputPassword} placeholder=" Password" secureTextEntry={true} autoCapitalize="none" value={this.state.password} onChangeText={(value) => this.setState({password: value})}></TextInput>
                    <View style={stylesLogin.buttonLogin}>
                        <Button title="Log in" type="solid" buttonStyle={{borderRadius: 4, backgroundColor: '#022933'}} raised={true} loading={this.state.isButtonLoading} onPress={() => this.loginButtonClicked()}></Button>
                    </View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                    <Text style={stylesLogin.textRegister}>Don't have an account?
                        <Text style={stylesLogin.textRegisterLink} onPress={()=> {this.registerButtonClicked()}}> Sign up.</Text>
                    </Text>
                    <Modal visible={this.state.showModal} transparent={true} style={stylesLogin.modalRegister} animationType={'slide'} onRequestClose={()=> this.setState({showModal: false, registerUser: '', registerPassword: '', registerRePassword: ''}) }>
                        <Card containerStyle={stylesLogin.cardRegister}>
                            <TextInput style={stylesLogin.textinputRegisterUser} placeholder=" Username/Email" autoCapitalize="none" value={this.state.registerUser} onChangeText={(value) => {this.setState({registerUser: value}); } }></TextInput>
                            <TextInput style={stylesLogin.textinputRegisterPassword} placeholder=" Password" secureTextEntry={true} autoCapitalize="none" value={this.state.registerPassword} onChangeText={(value) => this.setState({registerPassword: value})}></TextInput>
                            <TextInput style={stylesLogin.textinputRegisterPassword2} placeholder=" Re-enter password" secureTextEntry={true} autoCapitalize="none" value={this.state.registerRePassword} onChangeText={(value) => this.setState({registerRePassword: value})}></TextInput>
                            <View style={stylesLogin.buttonSignUp} >
                                <Button type="solid" title="Create account" buttonStyle={{borderRadius: 4, backgroundColor: '#022933'}} raised={true} loading={this.state.isButtonLoading2} onPress={()=> this.createAccount()}></Button>
                            </View>
                        </Card>
                    </Modal>

                    
                </View>
            )
        }else{
            return null;
        }
    }
}
export default Login