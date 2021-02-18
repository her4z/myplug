import React, { useRef } from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import stylesHome from '../styles/home_css';
import { Icon } from 'react-native-elements';
import { SearchBar, Button } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import Parse, { User } from "parse/react-native";
import { CommonActions } from '@react-navigation/native';
import stylesMain from '../styles/main_css';


interface Props{
    route: any,
    navigation: any
}

class Home extends React.Component <Props> {

    state={
    };

    async componentDidMount(){
        let username = await Parse.User.current()?.getUsername();
        Toast.show({
            type: 'success',
            text1: 'Login successfull',
            text2: `Welcome back ${username}!`,
            visibilityTime: 3000,
            position: 'top',
            topOffset: 75
            
        });
    }


    openDrawer(){
        this.props.navigation.openDrawer();
    }
    
    render(){
        return(
            <SafeAreaView>
                <View style={stylesHome.home}>
                    <View style={stylesHome.navBar}>
                        <Button
                            type="clear"
                            buttonStyle={stylesHome.buttonDrawer}
                            style={stylesHome.buttonDrawer}
                            onPress={()=> this.openDrawer()}
                            icon={
                                <Icon type="ant-design" name="bars" size={36}/>
                            }
                        />
                    </View>
                    <View style={stylesHome.buttonBuy}>
                        <Button title={`Buy${'\n'}Or${'\n'}Trade`} titleStyle={{fontSize: 80, fontFamily: 'Raleway-Regular', textAlign: 'center', width: '100%'}} buttonStyle={{width: '100%', height:'100%', backgroundColor: '#01151A'}}>
                            <Icon name="user" type="font-awesome" size={36} style={{position: 'absolute', bottom: 30}}>

                            </Icon>\
                        </Button>
                    </View>
                    <View style={stylesHome.midLine}>
                        
                    </View>
                    <View style={stylesHome.buttonSell}>
                        <Button title="Sell" titleStyle={{fontSize: 80, fontFamily: 'Raleway-Regular'}} buttonStyle={{width: '100%', height:'100%', backgroundColor: '#01151A'}}></Button>
                    </View>
                    <Toast ref={(ref) => Toast.setRef(ref)}/>
                </View>
            </SafeAreaView>
        )
    }
}


export default Home;