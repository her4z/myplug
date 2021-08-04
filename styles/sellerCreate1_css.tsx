import { StyleSheet, Dimensions} from 'react-native';
import stylesSellerMain from './sellerMain_css';

const window = Dimensions.get('window');

const stylesSellerCreate1 = StyleSheet.create({
    sellerCreate1:{
        backgroundColor: '#0E0E10',
    },
    container:{
        backgroundColor: '#0E0E10',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    title:{
        fontFamily: 'Raleway-Medium',
        textAlign: 'center',
        fontSize: 28,
        color: 'white',
        marginTop: '10%'
    },
    productImg:{
        width: 300,
        height: 200,
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 5
    },
    productName:{
        fontFamily: 'Raleway-Regular',
        fontSize: 16,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '10%',
        width: 300,
    },
    dropdown:{
        width: '60%',
        alignSelf: 'center',
    },
    priceText:{
        fontFamily: 'Raleway-Medium',
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: '10%',
        width: 300
    },
    priceInput:{
        fontFamily: 'Raleway-Medium',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: '10%',
        color: 'grey',

    }
})

export default stylesSellerCreate1;