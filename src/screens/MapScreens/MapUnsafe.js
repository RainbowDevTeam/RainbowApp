import React from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity}from 'react-native';
import Map from '../Components/Map';
import { AntDesign } from '@expo/vector-icons';

const MapUnsafe=()=>{
    return<View style={styles.container}>
        <View style={styles.topBox}>
            <Text style={styles.boxText}>Locais Perigosos</Text>
        </View>
        <Image source={require('../Images/unsafeIcon.png')} style={styles.mapIcon}/>
        <Map mapStyle={styles.map} situation={"dangerous"}/></View>
};
MapUnsafe.navigationOptions=({navigation})=>{
    return {
        title:"",
        headerTransparent:true,
        headerLeft:()=><TouchableOpacity onPress={()=>navigation.pop()}>
            <AntDesign style={styles.iconHeaderLeft} name="arrowleft" />
            </TouchableOpacity>
      };
 };
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
    },
    topBox:{
        alignSelf:'stretch',
        backgroundColor:"#F56D64",
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        position:'absolute',
        right:0,
        left:0
    },
    boxText:{
        fontSize:26,
        textAlignVertical:'center',
        marginLeft:50,
        height:230,
        color:"white",
        fontFamily:'dm-sans'
    },
    map:{
        flexGrow:1,
        zIndex:-1
    },
    mapIcon:{
        position:'absolute',
        right:30,
        top:160
    },
    iconHeaderLeft:{
        marginLeft:15,
        fontSize:30,
        color:'white'
    },
});

export default MapUnsafe;