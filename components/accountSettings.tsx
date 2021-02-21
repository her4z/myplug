import React, { useRef } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Parse, { User } from "parse/react-native";
import stylesAccountSettings from '../styles/accountSettings_css';
import { Avatar, Icon } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


interface Props{
    route: any
}

class AccountSettings extends React.Component <Props>{

    state= {
        imageSource: `${Parse.User.current()?.get('image')?.url()}`
    };
    
    componentDidMount(){
    }
    

    getName(){
        let name = Parse.User.current()?.get('name');
        let charIndex = -1;
        for(let char of name){
            charIndex++;
            if(char === " "){
                name = name.slice(0, charIndex);
                return name;
            }
        }
        return name;
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

    render(){
        return(
            <SafeAreaView>
                <View style={stylesAccountSettings.accountSettings}>
                    <Avatar rounded size={125} source={{uri: this.state.imageSource}} containerStyle={stylesAccountSettings.avatar}></Avatar>
                    <Icon name='add-a-photo' type='material-icons' size={25} onPress={()=> this.uploadImage()} containerStyle={{alignSelf: 'center'}}></Icon>
                    <Text style={stylesAccountSettings.textUser}>{`${Parse.User.current()?.get('name') ? this.getName() :  Parse.User.current()?.getUsername()}`}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default AccountSettings;