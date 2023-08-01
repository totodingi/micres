import * as React from 'react'
import {View, useWindowDimensions, ImageBackground} from "react-native-web";
import {NavBar} from "../components/home";
import {GetStarted} from "../components/home";
import {AuthMessage, InputsTitle} from "../components/signup";
import {Inputs} from "../components/login";
// import nodeFetch from 'node-fetch'

function Login(props){

  function login(){
    let body = {
      "user_id": props.appState.username,
      "password": props.appState.password
    }
    fetch("http://127.0.0.1:8000/login", {
      method: 'post',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
      .then((data) => {
        props.appStateDispatch({type: 'set_token', token: data.token})
        props.appStateDispatch({type: 'change_screen', nextScreen: 'variant'})
      })
      .catch(e => console.error(e))
  }

  return(
    <>
      <View
        style={{flex: 1, backgroundColor: '#fff', height: useWindowDimensions().height}}>
        <NavBar {...props}/>
        <InputsTitle {...props} text={'Sign In'}/>
        <Inputs {...props}/>
        <GetStarted {...props} text={'Login'} onPress={() => login()}/>
        <AuthMessage {...props} text={"Don't have an account ? Create one"}/>

      </View>
    </>
  )
}

export default Login
// import fetch from 'node-fetch'

// let fetch = require('node-fetch')
//
// let body = {
//   "user_id": 'wilson',
//   "password": 'tatqd3uX@'
// }
// console.log(JSON.stringify(body))
// fetch("http://127.0.0.1:8000/login", {
//   method: 'POST',
//   headers: {
//     "Content-Type": 'application/json',
//   },
//   body: JSON.stringify(body)
// }).then(res => res.json())
//   .then((data) => console.log('Login', data))
//   .catch(e => console.error(e))

