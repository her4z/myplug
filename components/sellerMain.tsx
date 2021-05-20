import React, { useRef } from 'react';
import { View, Text, SafeAreaView, TextInput, KeyboardAvoidingView, FlatList} from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import NavBar from './navBar';
import * as Font from 'expo-font';
import Parse, { User } from "parse/react-native";
import stylesSellerMain from '../styles/sellerMain_css';
import { API } from 'aws-amplify';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/core';




interface Props{
    route: any,
    navigation: any
}

class SellerMain extends React.Component <Props>{
    state={
        fontsLoaded: false,
        searchText: '',
        productTitleText: '',
        searchedProducts: [],
        selectedProduct: undefined
    };

    async componentDidMount(){
        await this.loadFonts();
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

    async search(text:string){
        this.setState({searchText: text});
        const res = await API.get('stockxAPI', `/products?text=${text}`, {});
        this.setState({searchedProducts: res.data});
    }

    nextButtonClicked(){
        if(this.state.productTitleText != ""){
            this.setState({selectedProduct: {name: this.state.productTitleText}}, ()=>{
                if(this.state.selectedProduct != undefined && this.state.selectedProduct != null){
                    this.props.navigation.navigate('Seller Create1', {product: this.state.selectedProduct});
                    this.setState({selectedProduct: undefined, productTitleText: '', searchText: '', searchedProducts: []});
                }
            })
        }
    }

    productItemClicked(item:any){
        this.setState({selectedProduct: item}, ()=>{
            this.props.navigation.navigate('Seller Create1', {product: this.state.selectedProduct})
            this.setState({selectedProduct: undefined, searchText: '', productTitleText: '', searchedProducts: []});
        });

    }

    render(){
        if(this.state.fontsLoaded && this.state.fontsLoaded === true){
            return(
                <SafeAreaView style={{width: '100%', height: '100%'}}>
                    <KeyboardAvoidingView style={stylesSellerMain.sellerMain} behavior="height">
                        <NavBar navigation={this.props.navigation}></NavBar>
                        <View style={stylesSellerMain.container}>
                            <Text style={stylesSellerMain.text1}>What do you want to sell/trade?</Text>
                            <FlatList
                                data={this.state.searchedProducts}
                                renderItem= {( {item} )=>
                                <TouchableOpacity onPress={()=> this.productItemClicked(item)}>
                                        <Text style={{textAlign: 'left', width: '80%', alignSelf: 'center', fontFamily: 'Raleway-Medium'}}>{`${item.name}`}</Text>
                                    </TouchableOpacity>
                                }
                                ListHeaderComponent={<SearchBar containerStyle={stylesSellerMain.searchBar} inputStyle={{fontFamily: 'Raleway-Light'}} placeholder="Search sneakers, streetwear..." round={true} value={this.state.searchText} onChangeText={(text)=> this.search(text)} onClear={()=> this.search('')}/>}
                                ListFooterComponent={
                                    <React.Fragment>
                                        <Text style={stylesSellerMain.text2}>Or</Text>
                                        <TextInput placeholder="Type product title..." style={stylesSellerMain.text3} value={this.state.productTitleText} onChangeText={(text)=> this.setState({productTitleText: text})}></TextInput>
                                    </React.Fragment>
                                }
                                style={stylesSellerMain.searchList}
                            />
                            <View style={stylesSellerMain.button}>
                                <Button title="Next" titleStyle={{fontFamily: 'Raleway-Medium', fontSize: 16}} buttonStyle={{backgroundColor: '#4b1f8c'}} onPress={()=> this.nextButtonClicked()}/>
                            </View>
                            <View style={stylesSellerMain.button}>
                                <Button title="Cancel" titleStyle={{fontFamily: 'Raleway-Medium', fontSize: 16}}  buttonStyle={{borderColor: '#4b1f8c', borderWidth: 2, backgroundColor: 'transparent'}} onPress={()=> this.props.navigation.goBack()}></Button>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            )
        }else{
            return null;
        }

    }
}

export default SellerMain;


