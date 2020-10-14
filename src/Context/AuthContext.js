import trackerApi from '../api/tempApi';
import createDataContext from './CreateDataContext';
import {AsyncStorage} from 'react-native';
import {navigate} from '../navigationRef';

const authReducer=(state,action)=>{
    switch(action.type){
        case 'add_error':
            return {...state,errorMessage:action.payload};
        case 'signin':
            return{errorMessage:'',token:action.payload};
        case 'signout':
            return {token:null,errorMessage:''};
        case 'clear_err_message':
            return{...state,errorMessage:''};
        default:
            return state;
    }
};
const signup=(dispatch)=> async ({email,userName,password})=>{
        try{
            const response = await trackerApi.post('/signup',{email,userName,password});
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signin',payload:response.data.token}); 
            navigate('MapFlow'); 
        }catch(err){
            dispatch({type:'add_error',payload:'Algo deu errado ao cadastrar-se'})
            console.log(err);
        }
}
const signin=(dispatch)=>async ({email,password})=>{
    try{
        const response=await trackerApi.post('/signin',{email,password});
        await AsyncStorage.setItem('token',response.data.token);
        dispatch({type:'signin',payload:response.data.token});
        navigate('MapFlow');
    }catch(err){
        dispatch({type:'add_error',payload:'Algo deu errado ao logar'})
    }
}
const tryLocalSignin = dispatch=>async()=>{
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type:'signin',payload:token});
        navigate('MapMain');
    }else{navigate('SignUp');}
}
const signout=(dispatch)=>async ()=>{
        await AsyncStorage.removeItem('token');
        dispatch({type:'signout'});
        navigate('loginFlow');
}
const clearErrorMessage=(dispatch)=>()=>{
    dispatch({type:'clear_err_message'});
}
export const{Provider,Context}=createDataContext(authReducer,{signin,tryLocalSignin,signout,signup,clearErrorMessage},{token:null,errorMessage:''});