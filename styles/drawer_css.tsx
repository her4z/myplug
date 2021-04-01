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
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        color: 'white'
    },
    textLogout:{
        marginLeft: '45%',
        fontFamily: 'Roboto-Regular',
        color: 'white'
    },
    itemLogout:{
        borderWidth: 1.75,
        borderColor: '#01151A',
        marginTop: '20%',
        backgroundColor: '#4b1f8c',
    }
})

export default stylesDrawer;