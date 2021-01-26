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
    textRegister:{
        fontFamily: 'Roboto-Regular',
        fontSize: 12.5,
        textAlign: 'center',
        marginTop: '10%'
    },
    textRegisterLink:{
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
        fontFamily: 'Roboto-Regular'
    },
    textinputRegisterUser:{
        borderColor: '#1E89DA',
        borderWidth: 1.25,
        width: '90%',
        height: '10%',
        alignSelf: 'center',
        borderRadius: 2,
        marginTop: '15%',
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        marginBottom:'10%'
    },
    textinputRegisterPassword:{
        borderColor: '#1E89DA',
        borderWidth: 1.25,
        width: '90%',
        height: '10%',
        alignSelf: 'center',
        borderRadius: 2,
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        marginBottom: '10%'
    },
    textinputRegisterPassword2:{
        borderColor: '#1E89DA',
        borderWidth: 1.25,
        width: '90%',
        height: '10%',
        alignSelf: 'center',
        borderRadius: 2,
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
    },
    buttonSignUp:{
        fontFamily: 'Roboto-Regular',
        width:'95%',
        height:'40%',
        alignSelf: 'center',
        marginTop:'20%'
    }
});

export default stylesLogin;