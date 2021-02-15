import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import Parse, { User } from "parse/react-native";

interface Props{
    route: any
}

class AccountSettings extends React.Component <Props>{
    constructor(Props: any){
        super(Props);
        this.state= {
            session:{
                user: {username: null}
            }
        };
    }

    componentDidMount(){
        let currentUser = Parse.User.current();
        this.setState({
            session:{
                user: currentUser
            }
        });
    }

    render(){
        return(
            <View>
                <Text>Hola</Text>
            </View>
        )
    }
}

export default AccountSettings;