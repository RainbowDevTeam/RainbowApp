import React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity,Text,Image}from 'react-native';
import MapOptionCard from '../Components/mapOptionCard';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Checkbox from '../Components/Checkbox';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {NavigationEvents} from 'react-navigation';
const MapMain=({navigation})=>{
    const [dialogVisible,setDialogVisible] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [fontsLoaded,setFontsLoaded]=useState(false);
    const fetchFonts=()=>Font.loadAsync({'dm-sans': require("../../fonts/DMSans-Regular.ttf"),});
    
      if(!fontsLoaded){
        return(
          <AppLoading
          startAsync={fetchFonts}
          onFinish={()=>{setFontsLoaded(true)}}
          onError={console.warn}/>
        )
      }
    return(
        <View>
        <View style={styles.topBox}>
    <Text style={styles.boxText}> Mapeamento</Text>
        </View>
        <Image source={require('../Images/MapIcon.png')} style={styles.mapIcon}/>
       <View style={styles.container}>
        <Text style={styles.tipText}>Vamos começar?</Text>
        <MapOptionCard  text="Quero cadastrar um local" setDialog={setDialogVisible}/>
        <MapOptionCard text="Quero ver locais seguros para o público LGBTQI+" routeName="MapSafe" />
        <MapOptionCard text="Quero ver locais perigosos para o público LGBTQI+" routeName="MapUnsafe" />
        </View>
        <Dialog visible={dialogVisible} 
        onTouchOutside={() =>setDialogVisible(false)} >
            <DialogContent style={styles.dialog}>
             <Text style={styles.dialogTitle}>Atenção!</Text>
             <Text style={styles.dialogText}>É estritamento proibido fazer denúncias  falsas conforme previsto na Lei n 12.8940/2008</Text>
             <Checkbox
             label="Estou ciente e quero continuar!"
             labelStyle={styles.checkboxLabelText}
             iconColor="black"
             checkColor="black"
             value={toggleCheckBox}
             onChange={()=>setToggleCheckBox(!toggleCheckBox)} />
             <View style={styles.dialogButtonWrapper} >
             <TouchableOpacity disabled={!toggleCheckBox} onPress={()=>{setDialogVisible(false); navigation.navigate('MapAdd')}}
               style={styles.dialogButton}>
                <Text style={toggleCheckBox?styles.dialogButtonText:styles.dialogButtonTextDisabled}>CONTINUAR</Text>
                </TouchableOpacity>
            </View>
            </DialogContent>
        </Dialog>
        </View>
    )};

     MapMain.navigationOptions=()=>{
        return {
            title:"",
            headerTransparent:true,
          };
     };
const styles = StyleSheet.create({
    topBox:{
        alignSelf:'stretch',
        backgroundColor:"#F8E921",
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        height:240,
    },
    boxText:{
        fontFamily:'dm-sans',
        fontSize:26,
        marginTop:80,
        marginLeft:30
    },
    mapIcon:{
        position:'absolute',
        right:20,
        top:160
    },
    tipText:{
        fontSize:22,
        fontFamily:'dm-sans'
    },
    container:{
        marginHorizontal:35,
        marginTop:45
    },
    dialog:{
        height:260,
        width:350,
        borderRadius:20,
    },
    dialogTitle:{
        fontSize:26,
        fontWeight:"bold",
        marginHorizontal:15,
        marginTop:25,
        fontFamily:'dm-sans'
    },
    dialogText:{
        fontSize:15,
        alignSelf:'flex-start',
        marginHorizontal:15,
        marginTop:15,
        fontFamily:'dm-sans'
    },
    dialogButtonWrapper:{
        flexDirection:'row-reverse',
    },
    dialogButton:{
        marginTop:15,
        marginRight:15,
        marginBottom:15,
        height:40,
        width:130,
        borderRadius:30,
        backgroundColor:'#F8E921',
        justifyContent:'center'
    },
    dialogButtonText:{
        textAlign: "center",
        fontSize:17,
        fontFamily:'dm-sans'
    },
    dialogButtonTextDisabled:{
        textAlign: "center",
        fontSize:17,
        opacity:0.5
    },
    checkboxLabelText:{
        color: 'black',
         fontSize: 14 ,
         fontFamily:'dm-sans'
    }
});

export default MapMain;