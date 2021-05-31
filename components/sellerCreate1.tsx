import React, { useRef } from 'react';
import { View, Text, SafeAreaView, TextInput, KeyboardAvoidingView, FlatList, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';



interface Props{
    route: any,
    navigation: any
}

class SellerCreate1 extends React.Component <Props>{
    state={
        product: undefined
    };

    componentDidMount(){
        this.setState({
            product: this.props.route.params
        }, ()=> console.log(this.state.product));
    }

    render(){
        return(
            <SafeAreaView style={{width: '100%', height: '100%'}}>
                <View style={{width: '100%', height: '100%', backgroundColor: '#0E0E10'}}>
                    <ScrollView style={{width: '80%', maxHeight: '60%', alignSelf: 'center', marginTop: '30%'}}>
                        <Text style={{color: 'white'}}>
                            {JSON.stringify(this.state.product)}
                        </Text>
                    </ScrollView>
                </View>  
            </SafeAreaView>

        )
    }
}

export default SellerCreate1;