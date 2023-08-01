import * as React from 'react'
import {View, Text, Pressable, TextInput} from "react-native-web";
import {GetStarted} from "./home";

function InputsTitle(props){
  return(
    <>
      <View>
        <Text style={{ fontSize: 40, color: '#000', fontWeight: 'bold', margin: 40, alignSelf: 'center'}}>
          {props.text}
        </Text>
      </View>
    </>
  )
}

function Inputs(props){
  return(
    <>
      <View style={{justifyContent: 'space-between',  flexDirection: 'row', width: '50%', alignSelf: 'center'}}>
        <TextInput
          placeholder={'Username'}
          placeholderTextColor={'#999'}
          style={{
            // borderWidth: 2,
            backgroundColor: '#f5f5fc',
            borderRadius: 10,
            borderColor: '#000',
            height: 50,
            width: '45%',
            padding: 10,
            fontSize: 20,
            color: '#000'
          }}
        />
        <TextInput
          placeholder={'Full Name'}
          placeholderTextColor={'#999'}
          style={{
            // borderWidth: 2,
            backgroundColor: '#f5f5fc',
            borderRadius: 10,
            borderColor: '#000',
            height: 50,
            width: '45%',
            padding: 10,
            fontSize: 20,
            color: '#000'
          }}
        />
      </View>
      <View style={{justifyContent: 'space-between',  flexDirection: 'row', width: '50%', alignSelf: 'center', marginTop: 30}}>
        <TextInput
          placeholder={'Email'}
          placeholderTextColor={'#999'}
          style={{
            // borderWidth: 2,
            backgroundColor: '#f5f5fc',
            borderRadius: 10,
            borderColor: '#000',
            height: 50,
            width: '100%',
            padding: 10,
            fontSize: 20,
            color: '#000'
          }}
        />
      </View>
      <View style={{justifyContent: 'space-between',  flexDirection: 'row', width: '50%', alignSelf: 'center', marginTop: 30}}>
        <TextInput
          placeholder={'Affilliation'}
          placeholderTextColor={'#999'}
          style={{
            // borderWidth: 2,
            backgroundColor: '#f5f5fc',
            borderRadius: 10,
            borderColor: '#000',
            height: 50,
            width: '100%',
            padding: 10,
            fontSize: 20,
            color: '#000'
          }}
        />
      </View>
      <View style={{justifyContent: 'space-between',  flexDirection: 'row',
        width: '50%', alignSelf: 'center', marginTop: 30, marginBottom: 30}}>
        <TextInput
          placeholder={'Password'}
          placeholderTextColor={'#999'}
          secureTextEntry
          style={{
            // borderWidth: 2,
            backgroundColor: '#f5f5fc',
            borderRadius: 10,
            borderColor: '#000',
            height: 50,
            width: '45%',
            padding: 10,
            fontSize: 20,
            color: '#000'
          }}
        />
        <TextInput
          placeholder={'Retype Password'}
          placeholderTextColor={'#999'}
          secureTextEntry
          style={{
            // borderWidth: 2,
            backgroundColor: '#f5f5fc',
            borderRadius: 10,
            borderColor: '#000',
            height: 50,
            width: '45%',
            padding: 10,
            fontSize: 20,
            color: '#000'
          }}
        />
      </View>
      <GetStarted {...props} text={'Signup'} />
    </>
  )
}

function AuthMessage(props) {
  return(
    <>
      <View>
        <Text style={{ fontSize: 30, color: '#000', fontWeight: 'normal', margin: 20, alignSelf: 'center'}}>
          {props.text}
          <Pressable onPress={() => props.appStateDispatch({type: 'change_screen', nextScreen: 'login'})}>
            <Text style={{ fontSize: 30, color: '#888', fontWeight: 'normal', margin: 5, alignSelf: 'center'}}>here</Text>
          </Pressable>
        </Text>
      </View>
    </>
  )
}

export {InputsTitle, Inputs, AuthMessage}
