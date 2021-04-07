import { StyleSheet, Platform, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const stylesMain = StyleSheet.create({
    main:{
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    navBar:{
        width:'100%',
        height: (window.height * 0.11),
        backgroundColor: '#18181B'
    },
    buttonDrawer:{
        width: '15%',
        marginTop: '8%',
    }
});

export default stylesMain;