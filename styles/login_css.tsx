import { StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');


const stylesLogin = StyleSheet.create({
    login:{
        backgroundColor: '#18181B',
        flex: 1
    },
    textinputUser:{
        borderColor: '#055266',
        color: 'grey',
        borderWidth: 1.25,
        width: '70%',
        height: (window.height * 0.05),
        alignSelf: 'center',
        borderRadius: 2,
        marginTop: '20%',
        fontFamily: 'Raleway-Light',
        fontSize: 15
    },
    textinputPassword:{
        borderColor: '#055266',
        borderWidth: 1.25,
        marginTop: '6%',
        width: '70%',
        height: (window.height * 0.05),
        alignSelf: 'center',
        borderRadius: 2,
        fontFamily: 'Raleway-Light',
        marginBottom: '12%',
        fontSize: 15
    },
    logo:{
        resizeMode: 'contain',
        aspectRatio: 1.75,
        alignSelf: 'center',
        marginTop: '30%'
    },
    brand:{
        textAlign: 'center',
        alignSelf: 'center',
        marginTop:'10%',
        fontSize: 40,
        fontFamily: 'Raleway-Medium'
    },
    buttonLogin:{
        width:'70%',
        alignSelf: 'center',
    },
    textRegister:{
        fontFamily: 'Raleway-Light',
        fontSize: 12.5,
        textAlign: 'center',
        marginTop: '2%'
    },
    textRegisterLink:{
        color: 'blue'
    },
    textForgotPassword:{
        fontFamily: 'Raleway-Light',
        fontSize: 12.5,
        textAlign: 'center',
        marginTop: '10%',
        color: 'blue'
    },
    modalRegister:{
        width: '100%',
        height:'100%',
    },
    cardRegister:{
        height: '60%',
        width: '90%',
        opacity: 0.95,
        marginTop: '70%',
        alignSelf: 'center',
        fontFamily: 'Raleway-Light',
        backgroundColor: '#01151A'
    },
    textinputRegisterUser:{
        borderColor: '#055266',
        color: 'grey',
        borderWidth: 1.25,
        width: '90%',
        height: '10%',
        alignSelf: 'center',
        borderRadius: 2,
        marginTop: '15%',
        fontFamily: 'Raleway-Light',
        fontSize: 15,
        marginBottom:'10%'
    },
    textinputRegisterPassword:{
        borderColor: '#055266',
        color: 'grey',
        borderWidth: 1.25,
        width: '90%',
        height: '10%',
        alignSelf: 'center',
        borderRadius: 2,
        fontFamily: 'Raleway-Light',
        fontSize: 15,
        marginBottom: '10%'
    },
    textinputRegisterEmail:{
        borderColor: '#055266',
        color: 'grey',
        borderWidth: 1.25,
        width: '90%',
        height: '10%',
        alignSelf: 'center',
        borderRadius: 2,
        fontFamily: 'Raleway-Light',
        fontSize: 15,
        marginBottom: '10%'
    },
    textinputRegisterPassword2:{
        borderColor: '#055266',
        color: 'grey',
        borderWidth: 1.25,
        width: '90%',
        height: '10%',
        alignSelf: 'center',
        borderRadius: 2,
        fontFamily: 'Raleway-Light',
        fontSize: 15,
    },
    buttonSignUp:{
        width:'95%',
        height:'40%',
        alignSelf: 'center',
        marginTop:'10%',
        fontSize: 12.5
    }
});

export default stylesLogin;