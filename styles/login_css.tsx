import { StyleSheet} from 'react-native';


const stylesLogin = StyleSheet.create({
    login:{
        backgroundColor: '#222222',
        width: '100%',
        height: '100%'
    },
    textinputUser:{
        borderColor: 'grey',
        borderWidth: 1.25,
        width: '70%',
        height: '5%',
        alignSelf: 'center',
        borderRadius: 2,
        marginTop: '15%',
        fontFamily: 'Roboto-Regular',
    },
    textinputPassword:{
        borderColor: 'grey',
        borderWidth: 1.25,
        marginTop: '6%',
        width: '70%',
        height:'5%',
        alignSelf: 'center',
        borderRadius: 2,
        fontFamily: 'Roboto-Regular',
        marginBottom: '10%',
    },
    logo:{
        resizeMode: 'contain',
        aspectRatio: 1.75,
        alignSelf: 'center',
        marginTop: '40%'
    },
    brand:{
        textAlign: 'center',
        alignSelf: 'center',
        marginTop:'5%',
        fontSize: 30,
        fontFamily: 'Raleway-Light'
    },
    buttonLogin:{
        fontFamily: 'Roboto-Regular',
        width:'70%',
        alignSelf: 'center',
    },
});

export default stylesLogin;