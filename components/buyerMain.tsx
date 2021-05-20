import React, { useRef } from 'react';
import { View, Text, SafeAreaView, TextInput, KeyboardAvoidingView} from 'react-native';
import Parse, { User } from "parse/react-native";
import stylesBuyerMain from '../styles/buyerMain_css';
import { SearchBar } from 'react-native-elements';
import NavBar from './navBar';
import * as Font from 'expo-font';



interface Props{
    route: any,
    navigation: any
}

class BuyerMain extends React.Component <Props>{
    
    
    state= {
        fontsLoaded: false,
        searchText: '',
    };
    
    async componentDidMount(){
        await this.loadFonts();
    }


    async search(text:string){
        this.setState({searchText: text});
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
                <SafeAreaView style={{width: '100%', height: '100%'}}>
                    <KeyboardAvoidingView style={stylesBuyerMain.buyerMain} behavior="padding">
                        <NavBar navigation={this.props.navigation}></NavBar>
                        <View style={stylesBuyerMain.container}>
                            <SearchBar containerStyle={stylesBuyerMain.searchBar} inputStyle={{fontFamily: 'Raleway-Light'}} placeholder="Search..." round={true} value={this.state.searchText} onChangeText={(text)=> this.search(text)} onClear={()=> this.search('')}></SearchBar>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            )
        }else{
            return null;
        }
    }
}

export default BuyerMain;