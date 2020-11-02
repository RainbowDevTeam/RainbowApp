import React ,{useState}from 'react';
import {View,StyleSheet,Text,TouchableOpacity,TextInput}from 'react-native';
import { Ionicons,Entypo } from '@expo/vector-icons';
import {cpfMask} from '../Components/cpfMask';
import {stylesLogin} from '../Components/stylesLogin';

const MapAdd=()=>{
    const [nome,setNome]=useState('');
    const [cpf,setCpf]=useState('');
    const [endereco,setEndereco]=useState('');
    const [situacao,setSit]=useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os Campos</Text>
            <Text style={styles.labelText}>Nome Completo</Text>
             <View style={styles.fieldBox}>
             <Ionicons name="md-person"  style={styles.iconInput} />
                <TextInput autoCapitalize={'words'} style={styles.input} onChangeText={(nome)=>setNome(nome)} 
                onSubmitEditing={() => { this.cpfInput.focus(); }}/>
             </View>

             <Text style={styles.labelText}>CPF</Text>
             <View style={styles.fieldBox}>
             <Entypo name="v-card" style={styles.iconInput} />
                <TextInput autoCapitalize={"none"} autoCorrect={false} style={styles.input} value={cpf} onChangeText={(cpf)=>setCpf(cpfMask(cpf))} 
                ref={(input) => { this.cpfInput = input; }} onSubmitEditing={() => { this.locationInput.focus(); }}/>
             </View>
             
             <Text style={styles.labelText}>Local do Ocorrido</Text>
             <View style={styles.fieldBox}>
             <Entypo name="location-pin" style={styles.iconInput} />
                <TextInput style={styles.input} onChangeText={(endereco)=>setEndereco(endereco)} 
                ref={(input) => { this.locationInput = input; }}/>
             </View>
             <TouchableOpacity onPress={()=>signin({email,password})} style={stylesLogin.signInButton}>
            <View><Text style={stylesLogin.signInText}>Enviar</Text></View>
            </TouchableOpacity>
             
             
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        marginHorizontal:40,
        marginTop:40,
        
    },
    title:{
        fontSize:26,
        fontWeight:"bold",
        fontFamily:'dm-sans'
    },
    labelText:{
        fontFamily:'dm-sans',
        color:'#8F92A1',
        fontWeight:'400',
        fontSize:18,
        marginTop:50
    },
    input:{
        fontSize:20,
        height:40,
        flex:5,
        fontFamily:'dm-sans'
    },
    iconInput:{
        flex:0.5,
        fontSize:24,
        alignSelf:'center',
        color:'black',
    },
    fieldBox:{
        flexDirection:'row',
        height:40,
        borderBottomColor:'black',
        borderBottomWidth:1
    },
});

export default MapAdd;