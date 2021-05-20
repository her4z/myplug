import { StyleSheet } from 'react-native';

const stylesDrawer = StyleSheet.create({
    avatar:{
        marginTop: '15%',
        alignSelf: 'center',
    },
    textUsername:{
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '10%',
        fontFamily: 'Raleway-Medium',
        fontSize: 16,
        color: 'white'
    },
    text:{
        fontFamily: 'Raleway-Light',
        fontSize: 14,
        color: 'white'
    },
    textLogout:{
        fontFamily: 'Raleway-Medium',
        color: 'white',
        marginLeft: '44.5%',
        fontSize: 16
    },
    itemLogout:{
        borderWidth: 1.75,
        borderColor: '#01151A',
        marginTop: '20%',
        backgroundColor: '#4b1f8c',
    }
})

export default stylesDrawer;