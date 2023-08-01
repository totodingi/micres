import * as React from 'react'
import {View, Text, Image, Pressable, TextInput} from "react-native-web";

function NavBar(props){
  const [hovered, setHovered] = React.useState(false)
  return(
    <>
      <Pressable
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={{flexDirection: 'row', height: 80, alignItems: 'center', elevation: 50,
          shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10, width: '100%',
          backgroundColor: hovered ? '#300': null,
          borderColor: '#fff',
          alignSelf: 'center',
          justifyContent: 'space-between'}}>

      </Pressable>
    </>
  )

}

function Inputs(props){
  return(
    <>
      <View style={{justifyContent: 'space-between',  flexDirection: 'row', width: '40%', alignSelf: 'center', marginTop: 30}}>
        <TextInput
          onChangeText={(value) => props.appStateDispatch({type: 'set_username', username: value})}
          placeholder={'Username'}
          placeholderTextColor={'#999'}
          style={{
            // borderWidth: 2,
            backgroundColor: '#f5f5fc',
            borderRadius: 10,
            borderColor: '#000',
            height: 60,
            width: '100%',
            padding: 10,
            fontSize: 20,
            color: '#000'
          }}
        />
      </View>
      <View style={{justifyContent: 'space-between',  flexDirection: 'row', marginBottom: 20,
        width: '40%', alignSelf: 'center', marginTop: 30}}>
        <TextInput
          onChangeText={(value) => props.appStateDispatch({type: 'set_password', password: value})}
          placeholderTextColor={'#999'}
          placeholder={'Password'}
          secureTextEntry
          style={{
            // borderWidth: 2,
            backgroundColor: '#f5f5fc',
            borderRadius: 10,
            borderColor: '#000',
            height: 60,
            width: '100%',
            padding: 10,
            fontSize: 20,
            color: '#000'
          }}
        />
      </View>
    </>
  )
}

export {NavBar, Inputs}
