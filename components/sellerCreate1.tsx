import React, { useEffect, useRef } from 'react';
import stylesSellerCreate1 from '../styles/sellerCreate1_css';
import NavBar from './navBar';
import * as Font from 'expo-font';
import { View, Text, SafeAreaView, TextInput, KeyboardAvoidingView, FlatList, ScrollView, Image, Animated} from 'react-native';
import {Card} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';






interface Props{
    route: any,
    navigation: any
}

interface SellerCreate1State{
    product: any,
    fontsLoaded: boolean,
    dropdownOpen: boolean,
    productPrice: string,
}


class SellerCreate1 extends React.Component <Props, SellerCreate1State>{

    constructor(props:any){
        super(props);
        this.state={
            product: {},
            fontsLoaded: false,
            dropdownOpen: false,
            productPrice: '0'
        }
    }

    componentDidMount(){
        this.setState({
            product: this.props.route.params.product
        });
        this.loadFonts();
        console.log(this.props.route.params.product)
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
        const sizesUS = {
            men:[
                {value: 3.5, label: "US 3.5", gender: "M"},
                {value: 4, label: "US 4", gender: "M"},
                {value: 4.5, label: "US 4.5", gender: "M"},
                {value: 5, label: "US 5", gender: "M"},
                {value: 5.5, label: "US 5.5", gender: "M"},
                {value: 6, label: "US 6", gender: "M"},
                {value: 6.5, label: "US 6.5", gender: "M"},
                {value: 7, label: "US 7", gender: "M"},
                {value: 7.5, label: "US 7.5", gender: "M"},
                {value: 8, label: "US 8", gender: "M"},
                {value: 8.5, label: "US 8.5", gender: "M"},
                {value: 9, label: "US 9", gender: "M"},
                {value: 9.5, label: "US 9.5", gender: "M"},
                {value: 10, label: "US 10", gender: "M"},
                {value: 10.5, label: "US 10.5", gender: "M"},
                {value: 11, label: "US 11", gender: "M"},
                {value: 11.5, label: "US 11.5", gender: "M"},
                {value: 12, label: "US 12", gender: "M"},
                {value: 12.5, label: "US 12.5", gender: "M"},
                {value: 13, label: "US 13", gender: "M"},
                {value: 13.5, label: "US 13.5", gender: "M"},
                {value: 14, label: "US 14", gender: "M"},
                {value: 14.5, label: "US 14.5", gender: "M"},
                {value: 15, label: "US 15", gender: "M"},
                {value: 15.5, label: "US 15.5", gender: "M"},
                {value: 16, label: "US 16", gender: "M"},
                {value: 16.5, label: "US 16.5", gender: "M"},
                {value: 17, label: "US 17", gender: "M"},
                {value: 17.5, label: "US 17.5", gender: "M"},
                {value: 18, label: "US 18", gender: "M"},
                {value: 18.5, label: "US 18.5", gender: "M"},
                {value: 19, label: "US 19", gender: "M"},
                {value: 19.5, label: "US 19.5", gender: "M"},
                {value: 20, label: "US 20", gender: "M"},
                {value: 20.5, label: "US 20.5", gender: "M"},
                {value: 21, label: "US 21", gender: "M"},
                {value: 21.5, label: "US 21.5", gender: "M"},
                {value: 22, label: "US 22", gender: "M"}
            ],
            women:[
                {value: 5, label: "US 5W", gender: "W"},
                {value: 5.5, label: "US 5.5W", gender: "W"},
                {value: 6, label: "US 6W", gender: "W"},
                {value: 6.5, label: "US 6.5W", gender: "W"},
                {value: 7, label: "US 7W", gender: "W"},
                {value: 7.5, label: "US 7.5W", gender: "W"},
                {value: 8, label: "US 8W", gender: "W"},
                {value: 8.5, label: "US 8.5W", gender: "W"},
                {value: 9, label: "US 9W", gender: "W"},
                {value: 9.5, label: "US 9.5W", gender: "W"},
                {value: 10, label: "US 10W", gender: "W"},
                {value: 10.5, label: "US 10.5W", gender: "W"},
                {value: 11, label: "US 11W", gender: "W"},
                {value: 11.5, label: "US 11.5W", gender: "W"},
                {value: 12, label: "US 12W", gender: "W"},
                {value: 12.5, label: "US 12.5W", gender: "W"},
                {value: 13, label: "US 13W", gender: "W"},
                {value: 13.5, label: "US 13.5W", gender: "W"},
                {value: 14, label: "US 14W", gender: "W"},
                {value: 14.5, label: "US 14.5W", gender: "W"},
                {value: 15, label: "US 15W", gender: "W"},
                {value: 15.5, label: "US 15.5W", gender: "W"},
                {value: 16, label: "US 16W", gender: "W"},
                {value: 16.5, label: "US 16.5W", gender: "W"},
                {value: 17, label: "US 17W", gender: "W"},
                {value: 17.5, label: "US 17.5W", gender: "W"},
                {value: 18, label: "US 18W", gender: "W"},
                {value: 18.5, label: "US 18.5W", gender: "W"},
                {value: 19, label: "US 19W", gender: "W"},
                {value: 19.5, label: "US 19.5W", gender: "W"},
                {value: 20, label: "US 20W", gender: "W"},
                {value: 20.5, label: "US 20.5W", gender: "W"},
                {value: 21, label: "US 21W", gender: "W"},
                {value: 21.5, label: "US 21.5W", gender: "W"},
                {value: 22, label: "US 22W", gender: "W"},
                {value: 22.5, label: "US 22.5W", gender: "W"},
                {value: 23, label: "US 23W", gender: "W"},
                {value: 23.5, label: "US 23.5W", gender: "W"}

            ],
            child:[
                {value: 1, label: "US 1C", gender: "C"},
                {value: 2, label: "US 2C", gender: "C"},
                {value: 3, label: "US 3C", gender: "C"},
                {value: 4, label: "US 4C", gender: "C"},
                {value: 5, label: "US 5C", gender: "C"},
                {value: 6, label: "US 6C", gender: "C"},
                {value: 7, label: "US 7C", gender: "C"},
                {value: 8, label: "US 8C", gender: "C"},
                {value: 9, label: "US 9C", gender: "C"},
                {value: 10, label: "US 10C", gender: "C"},
                {value: 10.5, label: "US 10.5C", gender: "C"},
                {value: 11, label: "US 11C", gender: "C"},
                {value: 11.5, label: "US 11.5C", gender: "C"},
                {value: 12, label: "US 12C", gender: "C"},
                {value: 12.5, label: "US 12.5C", gender: "C"},
                {value: 13, label: "US 13C", gender: "C"},
                {value: 13.5, label: "US 13.5C", gender: "C"},
                {value: 1, label: "US 1Y", gender: "Y"},
                {value: 1.5, label: "US 1.5Y", gender: "Y"},
                {value: 2, label: "US 2Y", gender: "Y"},
                {value: 2.5, label: "US 2.5Y", gender: "Y"},
                {value: 3, label: "US 3Y", gender: "Y"},
                {value: 3.5, label: "US 3.5Y", gender: "Y"},
                {value: 4, label: "US 4Y", gender: "Y"},
                {value: 4.5, label: "US 4.5Y", gender: "Y"},
                {value: 5, label: "US 5Y", gender: "Y"},
                {value: 5.5, label: "US 5.5Y", gender: "Y"},
                {value: 6, label: "US 6Y", gender: "Y"},
                {value: 6.5, label: "US 6.5Y", gender: "Y"},
                {value: 7, label: "US 7Y", gender: "Y"},
            ]
        }
        if(this.state.fontsLoaded && this.state.fontsLoaded === true){
            return(
                <SafeAreaView style={{width: '100%', height: '100%'}}>
                    <KeyboardAvoidingView style={stylesSellerCreate1.sellerCreate1} behavior='height'>
                        <NavBar navigation={this.props.navigation}></NavBar>
                        <View style={stylesSellerCreate1.container}>
                            <Text style={stylesSellerCreate1.title}>Your choice</Text>
                            <Image source={{uri: `${this.state.product?.media?.imageUrl}`}} style={stylesSellerCreate1.productImg}></Image>
                            <Text style={stylesSellerCreate1.productName}>{this.state.product?.name}</Text>
                            <DropDownPicker
                                open={this.state.dropdownOpen}
                                value={this.state.product.size}
                                items={this.state.product.gender === "men" ? sizesUS.men : (this.state.product.gender === "women" ? sizesUS.women : sizesUS.child)}
                                setOpen={()=> this.setState({dropdownOpen: this.state.dropdownOpen === true ? false : true})}
                                setValue={(value)=> this.setState((ps)=>{
                                    let product = ps.product;
                                    product.size = value(product.size);
                                    return ps;

                                })}
                                placeholder="Select a size"
                                searchable={true}
                                theme="DARK"
                                textStyle={{fontFamily: 'Roboto-Regular'}}
                                containerStyle={stylesSellerCreate1.dropdown}
                            />
                            {
                                (this.state.product.size) ?
                                    <React.Fragment>
                                            <Text style={stylesSellerCreate1.priceText}>Now, set up a price...</Text>
                                            <TextInput
                                            style={stylesSellerCreate1.priceInput}
                                            placeholderTextColor="grey"
                                            value={`${this.state.productPrice || '0.00'}`}
                                            onChangeText={(text)=> this.setState({productPrice: text})}
                                            />
                                    </React.Fragment>
                                :
                                null
                            }
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
    
            )
        }else{
            return null;
        }
    }
}

export default SellerCreate1;