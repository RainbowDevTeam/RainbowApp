import React,{useContext} from 'react';
import {StyleSheet,Text,TouchableOpacity,View}from 'react-native';
import {Context as AuthContext} from '../Context/AuthContext';
import {stylesLogin} from './Components/stylesLogin';
import {SafeAreaView} from 'react-navigation';

const AccountScreen=()=>{

    const {signout} = useContext(AuthContext);
    return<SafeAreaView forceInset={{top:'always'}}> 
<TouchableOpacity onPress={signout} style={stylesLogin.signInButton}>
    <View><Text style={stylesLogin.signInText}>Deslogar</Text></View>
</TouchableOpacity>
</SafeAreaView>
};
const styles = StyleSheet.create({});

export default AccountScreen;