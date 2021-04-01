import React, { useRef } from 'react';
import { View, Text, SafeAreaView, Modal} from 'react-native';
import stylesHome from '../styles/home_css';
import { Icon, ThemeConsumer } from 'react-native-elements';
import { SearchBar, Button } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import Parse, { User } from "parse/react-native";
import { CommonActions } from '@react-navigation/native';
import NavBar from './navBar';


interface Props{
    route: any,
    navigation: any
}



class Home extends React.Component <Props> {

    state={
        showModal: false
    };

    componentDidMount(){
        this.props.navigation.addListener('focus',
        ()=>{
            Toast.show({
                type: 'success',
                text1: 'Login successfull',
                text2: `Welcome back ${this.getName()}!`,
                visibilityTime: 3000,
                position: 'top',
                topOffset: 100,
                
            });
        });
    }

    getName(){
        let name = Parse.User.current()?.get('name');
        if(name){
            let charIndex = -1;
            for(let char of name){
                charIndex++;
                if(char === " "){
                    name = name.slice(0, charIndex);
                }
            }
            return name;
        }
        let username = Parse.User.current()?.getUsername();
        return username;
    }
    

    openDrawer(){
        this.props.navigation.openDrawer();
    }

    openLogoutModal(){
        this.setState({showModal: true});
    }


    
    render(){
        return(
            <SafeAreaView>
                <View style={stylesHome.home}>
                    <NavBar navigation = {this.props.navigation}></NavBar>
                    <Modal visible={this.state.showModal} transparent={true} animationType={'fade'} onRequestClose={()=> this.setState({showModal: false}) }>

                    </Modal>
                    <View style={stylesHome.buttonBuy}>
                        <Button title={`Buy${'\n'}Or${'\n'}Trade`} titleStyle={{fontSize: 80, fontFamily: 'Raleway-Regular', textAlign: 'center', width: '100%'}} buttonStyle={{width: '100%', height:'100%', backgroundColor: '#0E0E10'}}>
                            <Icon name="user" type="font-awesome" size={36} style={{position: 'absolute', bottom: 30}}>

                            </Icon>\
                        </Button>
                    </View>
                    <View style={stylesHome.midLine}>
                        
                    </View>
                    <View style={stylesHome.buttonSell}>
                        <Button title="Sell" titleStyle={{fontSize: 80, fontFamily: 'Raleway-Regular'}} buttonStyle={{width: '100%', height:'100%', backgroundColor: '#0E0E10'}}></Button>
                    </View>
                    <Toast ref={(ref) => Toast.setRef(ref)}/>
                </View>
            </SafeAreaView>
        )
    }
}


export default Home;