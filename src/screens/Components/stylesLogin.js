
import {StyleSheet} from 'react-native';
import { 
    DMSans_400Regular,
  } from '@expo-google-fonts/dm-sans';
const stylesLogin = StyleSheet.create({
    container:{
        marginHorizontal:40,
        marginTop:100
    },
    signUpTitle:{

        fontSize:32,
        fontWeight:"bold"
    },
    subTitle:{
        fontSize:20,
        fontWeight:'500',
        marginTop:10,
        marginBottom:20
    },
    labelText:{
        fontSize:15,
        fontWeight:'300',
        marginBottom:7,
        marginTop:35
    },  
    input:{
        fontSize:20,
        height:40,
        flex:5
        },
    iconInput:{
        flex:0.5,
        fontSize:24,
        alignSelf:'center',
        color:'black'
    },
    fieldBox:{
        flexDirection:'row',
        height:40,
        borderBottomColor:'black',
        borderBottomWidth:1
    },
    signInButton:{
        marginTop:65,
        height:60,
        borderRadius:30,
        backgroundColor:'#F8E921',
        justifyContent:'center'
    },
    signInText:{
        textAlign: "center",
        fontSize:24
    },
    fbButton:{
        marginTop:45,
        height:60,
        borderRadius:30,
        backgroundColor:'#0002FC',
        justifyContent:'center',
        flexDirection:'row'
    },
    fbText:{
        alignSelf: "center",
        fontSize:22,
        color:'white'
    },
    fbIcon:{
        alignSelf: "center",
        fontSize:30,
        color:'white',
        marginRight:10
    },
    signUpText:{
        alignSelf:"center",
        fontSize:18
    },
    signUpBox:{
        marginTop:30,
        flexDirection:'row',
        alignSelf:'center',
        fontWeight:'bold'
    },
    errMessage:{
        alignSelf:'center',
        textAlignVertical:'center',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        color:'red',
        marginTop:10,
        width:350,
        height:60,
        borderRadius:30,
        backgroundColor: 'rgba(255, 230, 230, 0.8)'
    }

});
export {stylesLogin};