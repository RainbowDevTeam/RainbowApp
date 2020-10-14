import React,{useState,useContext,useEffect} from 'react';
import {View,Text,TouchableOpacity,TextInput}from 'react-native';
import { Ionicons,Entypo } from '@expo/vector-icons';
import {stylesLogin} from './Components/stylesLogin';
import {Context as AuthContext} from '../Context/AuthContext';
import NavLink from './Components/NavLink';
import {NavigationEvents} from 'react-navigation';

const SignUpScreen=({navigation})=>{
    const {state,signup,clearErrorMessage} = useContext(AuthContext);
    const [email,setEmail] = useState('');
    const [userName,setUserName] = useState('');
    const [icon, setIcon] = useState("eye-with-line");
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword]= useState(false);
    console.log(state);

    togglePassword =  ()=>{
        icon==="eye"?(setIcon("eye-with-line"),setShowPassword(false)):(setIcon("eye"),setShowPassword(true));
    }

    return<View style={stylesLogin.container}>
        <NavigationEvents onWillFocus={clearErrorMessage}/>
    <Text style={stylesLogin.signUpTitle}>Cadastre-se!</Text>
    <Text style={stylesLogin.subTitle}>Crie uma conta para continuar</Text>
    {state.errorMessage?<Text style={stylesLogin.errMessage}>{state.errorMessage}</Text>:null}
    <Text style={stylesLogin.labelText}>E-mail</Text>
    <View style={stylesLogin.fieldBox}>
    <Entypo name="mail"  style={stylesLogin.iconInput} />
    <TextInput autoCapitalize="none" autoCorrect={false} style={stylesLogin.input} onChangeText={(email)=>setEmail(email)} />
    </View>
<Text style={stylesLogin.labelText}>Nome e sobrenome</Text>
    <View style={stylesLogin.fieldBox}>
    <Ionicons name="md-person"  style={stylesLogin.iconInput} />
    <TextInput style={stylesLogin.input} onChangeText={(userName)=>setUserName(userName)} />
    </View>
    <Text style={stylesLogin.labelText}>Senha</Text>
    <View style={stylesLogin.fieldBox}>
    <Entypo name="lock" style={stylesLogin.iconInput} />
    <TextInput autoCapitalize="none" autoCorrect={false} secureTextEntry={!showPassword} style={stylesLogin.input} onChangeText={(password)=>setPassword(password)} />
    <Entypo onPress={()=>togglePassword()} name={icon} style={stylesLogin.iconInput} />
    </View>
        <TouchableOpacity onPress={()=>signup({email,userName,password})} style={stylesLogin.signInButton}>
            <View><Text style={stylesLogin.signInText}>Cadastrar</Text></View>
        </TouchableOpacity>
        <NavLink routeName="SignIn" text="Já possui uma conta? Entrar"/>
        </View>
};

SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
export default SignUpScreen;
