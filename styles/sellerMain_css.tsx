import { StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const stylesSellerMain = StyleSheet.create({
    sellerMain:{
        backgroundColor: '#0E0E10',
    },
    container:{
        backgroundColor: '#0E0E10',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    text1:{
        fontFamily: 'Raleway-Medium',
        textAlign: 'center',
        marginTop: (window.height * 0.15),
        fontSize: 22
    },
    searchBar:{
        marginTop: (window.height * 0.03),
        width: (window.width * 0.9),
        alignSelf: 'center',
        backgroundColor: '#0E0E10',
        borderWidth: 0,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    text2:{
        fontFamily: 'Raleway-Medium',
        textAlign: 'center',
        marginTop: '10%',
        marginBottom: '5%',
        fontSize: 22,
    },
    text3:{
        fontFamily: 'Raleway-Light',
        textAlign: 'center',
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 5,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#0E0E10',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        marginTop: '5%'

    },
    searchList:{
        maxHeight: window.height * 0.4,
        marginTop: window.height * 0.05
    },
    button:{
        width: '60%',
        alignSelf: 'center',
        marginTop: '10%',
    }
});

export default stylesSellerMain;