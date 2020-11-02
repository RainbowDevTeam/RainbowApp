import React from 'react';
import {TouchableOpacity,StyleSheet,Text,View} from 'react-native';
import {withNavigation} from 'react-navigation';    
import {AppLoading} from 'expo';
import * as Font from 'expo-font';

const mapOptionCard = ({text,navigation,routeName,setDialog})=>{
    const checkNav = ()=>{
        setDialog!=undefined?setDialog(true):null;
        routeName==undefined?null:navigation.navigate(routeName);
    }
    return (<TouchableOpacity onPress={checkNav}>
    <View style={styles.card}>
    <Text style={styles.cardText}>{text}</Text>
    </View>
    </TouchableOpacity>
    )};

const styles = StyleSheet.create({
    card:{
        marginTop:40,
        height:80,
        alignSelf:'stretch',
        backgroundColor:"white",
        borderRadius:20,
        padding:10,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
        justifyContent:"center",
    },
    cardText:{
        alignSelf:"center",
        fontSize:20,
        fontFamily:'dm-sans'
    }
});
export default withNavigation(mapOptionCard);