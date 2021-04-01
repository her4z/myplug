import React, { useRef } from 'react';
import { View, Text, SafeAreaView, TextInput} from 'react-native';
import Parse, { User } from "parse/react-native";
import stylesAccountSettings from '../styles/accountSettings_css';
import { Avatar, Icon, Card } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import NavBar from './navBar';
import * as Font from 'expo-font';




interface Props{
    route: any,
    navigation: any
}

class AccountSettings extends React.Component <Props>{

    state= {
        imageSource: `${Parse.User.current()?.get('image')?.url()}`,
        fontsLoaded: false,
        user: '',
        userName: '',
        userSurname: '',
        userEmail: ''
    };
    
    async componentDidMount(){
        this.setState({
            user: Parse.User.current()?.getUsername(),
            userName: Parse.User.current()?.get('name'),
            userSurname: Parse.User.current()?.get('surname'),
            userEmail: Parse.User.current()?.getEmail()
        });
        await this.loadFonts();
    }
    

   async uploadImage(){
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status !=='granted'){
            alert(`Can't access your photos, please give us access to make this work!`);
        }else{
            let result = await ImagePicker.launchImageLibraryAsync({mediaTypes: ImagePicker.MediaTypeOptions.Images, base64: true});
            if(!result.cancelled){
                let username = await Parse.User.current()?.id;
                let image = await new Parse.File(`profilePhoto-${username}.jpg`, {base64: result?.base64});
                await Parse.User.current()?.set('image', image);
                await Parse.User.current()?.save();
                this.setState({imageSource: `${Parse.User.current()?.get('image')?.url()}`});
            }
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

    render(){
        if(this.state.fontsLoaded && this.state.fontsLoaded === true){
            return(
                <SafeAreaView>
                    <View style={stylesAccountSettings.accountSettings}>
                        <NavBar navigation={this.props.navigation}></NavBar>
                        <Avatar rounded size={125} source={{uri: this.state.imageSource}} containerStyle={stylesAccountSettings.avatar}></Avatar>
                        <Icon name='add-a-photo' type='material-icons' size={25} onPress={()=> this.uploadImage()} containerStyle={{alignSelf: 'center', marginBottom: '5%'}}></Icon>
                        <Card containerStyle={stylesAccountSettings.containerUserData}>
                            <Card.Divider style={stylesAccountSettings.containerDividerUserData}>
                                <TextInput style={stylesAccountSettings.dataText} value={this.state.user} onChangeText={(value)=> this.setState({user: value})}></TextInput>
                            </Card.Divider>
                            <Card.Divider style={stylesAccountSettings.containerDividerUserData}>
                                <TextInput style={stylesAccountSettings.dataText} value={this.state.userName} onChangeText={(value)=> this.setState({userName: value})}></TextInput>
                            </Card.Divider>
                            <Card.Divider style={stylesAccountSettings.containerDividerUserData}>
                                <TextInput style={stylesAccountSettings.dataText} value={this.state.userSurname} onChangeText={(value)=> this.setState({userSurname: value})}></TextInput>
                            </Card.Divider>
                            <Card.Divider style={stylesAccountSettings.containerDividerUserData}>
                                <TextInput style={stylesAccountSettings.dataText} value={this.state.userEmail} onChangeText={(value)=> this.setState({userEmail: value})}></TextInput>
                            </Card.Divider>
                        </Card>
                    </View>
                </SafeAreaView>
            )
        }else{
            return null;
        }
    }
}

export default AccountSettings;