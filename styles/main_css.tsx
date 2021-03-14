import { StyleSheet, Platform } from 'react-native';

const stylesMain = StyleSheet.create({
    main:{
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    navBar:{
        width:'100%',
        height:'10%',
        backgroundColor: '#022933'
    },
    buttonDrawer:{
        width: '15%',
        marginTop: '8%',
    }
});

export default stylesMain;