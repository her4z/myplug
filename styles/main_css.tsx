import { StyleSheet, Platform } from 'react-native';

const stylesMain = StyleSheet.create({
    main:{
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
});

export default stylesMain;