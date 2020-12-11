import React,{useState} from 'react';
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import {Text,View,StyleSheet,Image,Dimensions} from 'react-native';

const PostCard = ()=>{
    const [location,setLocation] = useState('São Paulo');
    const [timePosted,setTimePosted]= useState('há 2 horas');
    const [description,setDescription] = useState('Evento LGBTQI+ acontecendo na Avenida Paulista! 🏳️‍🌈')
    return(
    <View style={styles.cardWrapper}>
        <Text style={styles.cardInfo}>{location}, {timePosted}</Text>
        <Text style={styles.cardDesc}>{description}</Text>
        <View style={styles.imageWrapper}>
            <Image style={styles.postImage} source={require('../Images/photo1.jpg')}/>
            <Image style={styles.postImage} source={require('../Images/photo2.jpg')}/>
        </View>
        <View style={styles.iconWrapper}>
        <AntDesign size={20} style={styles.icon} name="hearto"/>
        <FontAwesome size={20} style={styles.icon} name="share"/>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
 cardWrapper:{
    height:260,
    alignSelf:'center',
    marginTop:7,
    width:Dimensions.get('window').width*.85,
    marginHorizontal:30,
    backgroundColor:"white",
    borderRadius:20,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
    justifyContent:'flex-start',
 },
 cardInfo:{
    fontFamily:'dm-sans',
    fontSize:14,
    fontWeight:'300',
    marginTop:15,
    marginLeft:15
 },
 cardDesc:{
    fontFamily:'dm-sans',
    fontSize:14,
    fontWeight:'300',
    marginTop:12,
    marginLeft:15,
    height:35
 },
 imageWrapper:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-evenly'
 },
 postImage:{
     height:130,
     width:'45%',
     borderRadius:10,
     marginTop:20
 },
 iconWrapper:{
     flexDirection:'row',
     justifyContent:'flex-end',
     marginTop:7
 },
 icon:{
     marginHorizontal:15
 }
});

export default PostCard;