import React,{useContext, useState} from 'react';
import {View,Text,TouchableOpacity,TextInput}from 'react-native';
import { Ionicons,Entypo } from '@expo/vector-icons';
import {stylesLogin} from './Components/stylesLogin';
import {Context as AuthContext} from '../Context/AuthContext';
import NavLink from './Components/NavLink';
import {NavigationEvents} from 'react-navigation';

const SignInScreen=({navigation})=>{
    const {state,signin,clearErrorMessage} = useContext(AuthContext);
    const [email,setEmail] = useState('');
    const [icon, setIcon] = useState("eye-with-line");
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword]= useState(false);

    togglePassword =  ()=>{
        icon==="eye"?(setIcon("eye-with-line"),setShowPassword(false)):(setIcon("eye"),setShowPassword(true));
    }

    return<View style={stylesLogin.container}>
        <NavigationEvents onWillFocus={clearErrorMessage}/>
    <Text style={stylesLogin.signUpTitle}>Login</Text>
    <Text style={stylesLogin.subTitle}>Bem-vindo ao Rainbow</Text>
    {state.errorMessage?<Text style={stylesLogin.errMessage}>{state.errorMessage}</Text>:null}
    <Text style={stylesLogin.labelText}>E-mail</Text>
    <View style={stylesLogin.fieldBox}>
    <Entypo name="mail"  style={stylesLogin.iconInput} />
    <TextInput autoCapitalize="none" autoCorrect={false} style={stylesLogin.input} onChangeText={(email)=>setEmail(email)} />
    </View>
    <Text style={stylesLogin.labelText}>Senha</Text>
    <View style={stylesLogin.fieldBox}>
    <Entypo name="lock" style={stylesLogin.iconInput} />
    <TextInput autoCapitalize="none" autoCorrect={false} secureTextEntry={!showPassword} style={stylesLogin.input} onChangeText={(password)=>setPassword(password)} />
    <Entypo onPress={()=>togglePassword()} name={icon} style={stylesLogin.iconInput} />
    </View>
        <TouchableOpacity onPress={()=>signin({email,password})} style={stylesLogin.signInButton}>
            <View><Text style={stylesLogin.signInText}>Entrar</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
        style={stylesLogin.fbButton}>
            <Entypo name="facebook-with-circle" style={stylesLogin.fbIcon} />
            <Text style={stylesLogin.fbText}>Connect with facebook</Text>
        </TouchableOpacity>
        <NavLink routeName="SignUp" text="Não Possui uma conta? Cadastre-se"/>
        </View>
};

SignInScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
export default SignInScreen;
