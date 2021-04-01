import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import stylesMain from '../styles/main_css';


interface Props{
    navigation: any
}

class NavBar extends React.Component <Props>{

    openDrawer(){
        this.props.navigation.openDrawer();
    }

    render(){
        return(
            <View style={stylesMain.navBar}>
            <Button
                type="clear"
                buttonStyle={stylesMain.buttonDrawer}
                style={stylesMain.buttonDrawer}
                onPress={()=> this.openDrawer()}
                icon={
                    <Icon type="ant-design" name="bars" size={36} color='white'/>
                }
            />
            </View>
        )
    }
}

export default NavBar;