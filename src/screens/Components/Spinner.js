import React from 'react';
import {View,ActivityIndicator} from 'react-native';

const Spinner=({size})=>{
return <View style={styles.spinner}>
    <ActivityIndicator size={size || 'large'} color={'black  '} />
</View>
};

const styles={
    spinner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
};

export {Spinner};