import React from 'react';
import { View } from 'react-native';
import stylesHome from '../styles/home_css';
import { Icon } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import Toast from 'react-native-toast-message';

interface Props{
    route: any
}

class Home extends React.Component <Props> {

    state={
        searchText: ''
    };

    componentDidMount(){
        this.props.route.params.toast === true?
        Toast.show({
            type: 'success',
            text1: 'Login successfull',
            text2: 'Welcome back!',
            visibilityTime: 3000,
            topOffset: 100
            
        }):''
    }

    search(text:string){
        this.setState({searchText: text});
    };

    render(){
        return(
            <View style={stylesHome.home}>
                <Icon
                    style={stylesHome.icon}
                    name='user'
                    type='font-awesome'
                    size={40}
                />
                <SearchBar
                    style={stylesHome.searchBar}
                    placeholder="Buscar ofertas..."
                    onChangeText={(text)=> {this.search(text)}}
                    value={this.state.searchText}
                />
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
        )
    }
}


export default Home;