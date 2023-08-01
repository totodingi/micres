import * as React from 'react'
import {View, useWindowDimensions, ImageBackground} from "react-native-web";
import {NavBar} from "../components/home";
import {AuthMessage, Inputs, InputsTitle} from "../components/signup";

function Signup(props){
  return(
    <>
      <View
        // source={require(`../assets/bg7.jpg`)}
        // imageStyle={{opacity: 0.9}}
        style={{flex: 1, backgroundColor: '#fff', height: useWindowDimensions().height}}>
        <NavBar {...props}/>
        <InputsTitle {...props} text={'Create your Account'}/>
        <Inputs {...props}/>
        <AuthMessage {...props} text={"Already have an account ? Login"}/>

      </View>
    </>
  )
}

export default Signup
