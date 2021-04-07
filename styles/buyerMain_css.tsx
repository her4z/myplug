import { StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const stylesBuyerMain = StyleSheet.create({
    buyerMain:{
        backgroundColor: '#0E0E10',
        flex: 1,
    },
    container:{
        backgroundColor: '#0E0E10',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    searchBar:{
        marginTop: (window.height * 0.03),
        backgroundColor: '#0E0E10',
        borderWidth: 0,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    }
})

export default stylesBuyerMain;