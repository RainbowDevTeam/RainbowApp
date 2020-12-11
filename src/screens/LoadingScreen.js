import React,{useContext,useEffect,useState} from 'react';
import Font from 'expo-font';
import AuthContext from '../Context/AuthContext';

const LoadingScreen = ()=>{
useEffect(()=>{
        Font.loadAsync({'dm-sans': require("../fonts/DMSans-Regular.ttf"),});
    },[]);
        return null;
};
export default LoadingScreen;