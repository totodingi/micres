import * as React from 'react'
import {View, Text, Image, Pressable} from "react-native-web";

function NavBar(props) {
  const [hovered, setHovered] = React.useState(false)
  return(
    <>
      <View
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={{flexDirection: 'row', height: 80, alignItems: 'center', elevation: 10,
        shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10,
          width: '100%',
        // backgroundColor: hovered ? '#fff': '#F5F5FF',
        borderColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', height: 60, opacity: 1,
          borderTopStartRadius:10, borderBottomStartRadius: 10,
          alignItems: 'center', elevation: 50, margin: 20, padding: 10, borderRadius: 10, width: '30%',}}>
          <Pressable
            onPress={() => props.appStateDispatch({type: 'change_screen', nextScreen: 'home'})}>
            <Image
              source={require('../assets/bact2.jpg')}
              style={{ width: 50, height: 50, borderRadius: 30}}
            />
          </Pressable>
          <Text style={{ fontSize: 30, color: '#000', margin: 20, fontWeight: 'bold'}}>
            MICRES
          </Text>
        </View>
        <View style={{flexDirection: 'row',  height: 60, justifyContent: 'flex-end',
          alignItems: 'center', elevation: 0, margin: 20, padding: 10,
          borderTopEndRadius:10, borderBottomEndRadius: 10, borderRadius: 10,
          width: '30%'}}>
          <LoginButton {...props}/>


        </View>
      </View>
    </>
  )
}

function TitleText(){
  return(
    <>
      <View>
        <Text style={{ fontSize: 40, color: '#000', fontWeight: 'bold', margin: 20, alignSelf: 'center'}}>
          Bridging the Gap in Antimicrobial Resistance Decision-Making
        </Text>
      </View>
    </>
  )
}

function LoginButton(props){
  const [hovered, setHovered] = React.useState(false)
  return(
    <>
      <Pressable
        onPress={() => props.appStateDispatch({type: 'change_screen', nextScreen: 'variant'})}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={{ padding: 13,
          backgroundColor: hovered ? '#ff5050': '#fff0f0',
          borderWidth:  hovered ? 3: 3,
          borderRadius: hovered ? 30: 30,
          borderColor:  hovered ? '#ff5050': '#fff0f0',
          width: hovered ? '40%': '40%',
          // shadowColor:hovered ? '#000': null,
          // shadowOpacity:hovered ? 0.2: null,
          // shadowRadius: hovered ? 4: null,
          // elevation: hovered ? 50: null,
          justifyContent: 'center', flexDirection: 'row'}}>
        <Text
          style={{ fontSize: 18,
            color: hovered ? '#000': '#555',
            fontWeight: hovered ? 'bold': 'normal',
            alignSelf: 'center'}}>
          Login
        </Text>
      </Pressable>
    </>
  )
}

function SignupButton(){
  return(
    <>
      <Pressable
        style={{ backgroundColor: '#888', borderRadius: 10, padding: 13,
          justifyContent: 'center', flexDirection: 'row', width: '40%'}}>
        <Text style={{ fontSize: 18, color: '#000',  alignSelf: 'center'}}>
          Signup
        </Text>
      </Pressable>
    </>
  )
}

function AboutText(props){
  const [hovered, setHovered] = React.useState(false)
  return(
    <>
      <Pressable
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={{
          // backgroundColor: '#f5f5fc',
          // borderWidth:   2,
          borderRadius:  20,
          width: '60%',
          alignSelf: 'center',
          margin: 50,
          opacity: hovered ? 0.7: 0.9,
          // elevation: 50,
          // borderColor: '#fff',
          // shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10,
        }}>
        <Text
          style={{ fontSize: 20, textAlign:'center',
            color:  '#000',
            margin: 30, alignSelf: 'center'}}>
           MICRES, an innovative open-source AI-powered AMR analysis and visualization platform to empower decision-makers with minimal or no analytics experience to make sense of AMR data and drive impactful interventions.
        </Text>
      </Pressable>
    </>
  )
}

function GetStarted (props){
  const [hovered, setHovered] = React.useState(false)
  return(
    <>
      <Pressable
        onPress={props.onPress}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={(state) => [{ borderColor:  '#555', padding: 15,
          backgroundColor:  hovered ? '#50ff50': '#f0fff0',
          height:60,
          // borderWidth:  state.hovered ? null: 3,
          borderRadius: state.hovered ? 30: 30,
          alignSelf: 'center', margin: 20,
          width:  state.hovered ? '40%': '20%',
          justifyContent: 'center', flexDirection: 'row'}]}>
        <Text
          style={{ fontSize: hovered ? 25: 20,
            color: hovered ? '#000': '#555',
            fontWeight: hovered ? 'bold': 'normal',
            alignSelf: 'center'}}>
          {props.text}
        </Text>
      </Pressable>
    </>
  )
}

export {NavBar, TitleText, AboutText, GetStarted, SignupButton}
