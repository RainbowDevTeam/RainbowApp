import React,{useContext, useState} from 'react';
import {StyleSheet,Text,ScrollView,View,Image,Dimensions}from 'react-native';
import {Context as AuthContext} from '../Context/AuthContext';
import PostCard from './Components/PostCard';

const AccountScreen=()=>{
    const [pName,setPName] = useState('Cícero Lima');
    const [pLocation,setLocation]=useState('São Paulo, SP');
    const [followers,setFollowers]=useState(235);
    const [following,setFollowing]=useState(315);

    const {signout} = useContext(AuthContext);
    return(
    <View style={styles.container}> 
        <Image style={styles.coverImage} source={require('./Images/cover-sample.jpg')} />
        <Image style={styles.profileImage} source={require('./Images/dude.jpeg')} />
        <View style={styles.profileInfoContainer}>
            <Text style={styles.pName}>{pName}</Text>
            <Text style={styles.pLocation}>{pLocation}</Text>
            <View style={styles.followBoxWrapper}>
                <View style={styles.followBox}>
                <Text style={styles.followBoxTitle}>Seguidores</Text>
                <Text style={styles.followBoxNumber}>{followers}</Text>
                </View>
                <View style={styles.followBox}>
                <Text style={styles.followBoxTitle}>Seguindo</Text>
                <Text style={styles.followBoxNumber}>{following}</Text>
                </View>
            </View>
            <Text style={styles.postsTitle}>Meus Posts</Text>
            <ScrollView horizontal={true} style={styles.postsWrapper}>
                <View><PostCard/></View>
                <View><PostCard/></View>
            </ScrollView>
        </View>
    </View>
    )
};
const styles = StyleSheet.create({
    container:{
        marginTop:24,
        alignItems:"center",
        flexDirection:'column'
    },
    coverImage:{
        width:'100%',
        height:200,
        marginBottom:-150,
        zIndex:0,
        resizeMode:'cover'
    },
    profileImage:{
        borderRadius:100,
        width:200,
        height:200,
        zIndex:10,
        elevation:5
    },
    profileInfoContainer:{
        marginTop:-105,
        zIndex:0,
        paddingTop:50,
        backgroundColor:'rgba(235,232,236,1)',
        borderRadius:50,
        width:'100%',
        height:'100%',
        
    },
    pName:{
        marginTop:55,
        fontFamily:'dm-sans',
        fontSize:23,
        fontWeight:'700',
        alignSelf:'center'
    },
    pLocation:{
        marginTop:5,
        fontFamily:'dm-sans',
        fontSize:14,
        fontWeight:'300',
        alignSelf:'center'
    },
    followBoxWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30
    },
    followBox:{
        flexDirection:'column',
        alignItems:"center",
        marginHorizontal:38
    },
    followBoxTitle:{
        fontFamily:'dm-sans',
        fontSize:19,
        fontWeight:'600'
    },
    followBoxNumber:{
        fontFamily:'dm-sans',
        fontSize:17,
        fontWeight:'bold'
    },
    postsTitle:{
        fontSize:23,
        fontFamily:'dm-sans',
        fontWeight:'bold',
        marginTop:28,
        marginLeft:45
    },
});
export default AccountScreen;