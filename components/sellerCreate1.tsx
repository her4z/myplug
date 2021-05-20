import React, { useRef } from 'react';
import { View, Text, SafeAreaView, TextInput, KeyboardAvoidingView, FlatList} from 'react-native';



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
            <React.Fragment></React.Fragment>

        )
    }
}

export default SellerCreate1;