import React from 'react';
import {stylesLogin} from './stylesLogin';
import {TouchableOpacity,Text,View} from 'react-native';
import {withNavigation} from 'react-navigation';


const NavLink = ({text,navigation,routeName})=>{
    return <TouchableOpacity onPress={()=>navigation.navigate(routeName)}>
    <View>
<Text style={stylesLogin.signUpBox}>
<Text style={stylesLogin.signUpText}>{text}
</Text>
</Text>
    </View>
</TouchableOpacity>
};
export default withNavigation(NavLink);