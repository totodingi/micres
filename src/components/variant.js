import * as React from 'react'
import {View, TextInput, Text, Pressable, Image, Modal, ActivityIndicator} from "react-native-web";
import Ionicons from "react-native-vector-icons/dist/Ionicons";



function NavBar(props){
  const [modalVisible, setModalVisible] = React.useState(false)
  return(
    <>
      <View style={{
        backgroundColor: '#fff',
        height: 80,
        flexDirection: 'row' ,
        alignItems: 'center',
        shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10,
        justifyContent: 'space-between', padding: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center' }}>
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

        <Pressable onPress={() => setModalVisible(true)}>
          <Ionicons name={'person-circle-outline'} size={60}/>
        </Pressable>
      </View>
      <AccountModal
        modalVisible={modalVisible}
        modalClose={() => setModalVisible(false)}
      />
    </>
  )
}

function SearchBar(props){
  return(
    <>
      <View style={{justifyContent: 'space-evenly',  flexDirection: 'row', width: '50%',
        borderRadius: 40, borderWidth: 0, alignItems: 'center', height: 55,
        backgroundColor: '#f5f5f5',
        alignSelf: 'center', margin: 10}}>
        <FilterButton {...props} text={'Filter'}/>
        <TextInput
          onChangeText={(value) => props.appStateDispatch({type: 'set_query', query: value})}
          placeholder={'Eg: rs100234, chr1, APOL1'}
          placeholderTextColor={'#999'}
          style={{
            // borderWidth: 2,
            // borderRadius: 30,
            // marginLeft: 10,
            // marginRight: 10,
            margin:5,
            borderColor: '#000',
            height: 50,
            width: '75%',
            padding: 10,
            fontSize: 20,
            color: '#000'
          }}
        />
        <SearchButton {...props} text={'Search'}/>
      </View>
    </>
  )
}

function SearchButton(props){
  const [hovered, setHovered] = React.useState(false)
  return(
    <>
      <Pressable
        onPress={props.onSearch}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={{ padding: 13,
          backgroundColor: hovered ? '#50ff50': '#f0fff0',
          borderWidth:  hovered ? 3: 3,
          // borderRadius: hovered ? 30: 30,
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          borderColor: hovered ? '#50ff50': '#f0fff0',
          width: hovered ? '20%': '20%',
          justifyContent: 'center', flexDirection: 'row'}}>
        <Text
          style={{ fontSize: 18,
            color: hovered ? '#000': '#888',
            fontWeight: hovered ? 'bold': 'normal',
            alignSelf: 'center'}}>
          {props.text}
        </Text>
      </Pressable>
      <LoadingModal {...props}/>
    </>
  )
}

function FilterButton(props){
  const [hovered, setHovered] = React.useState(false)
  return(
    <>
      <Pressable
        onPress={props.onPress}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={{ padding: 13,
          backgroundColor: hovered ? '#ff5050': '#fff0f0',
          borderWidth:  hovered ? 3: 3,
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          borderColor: hovered ? '#ff5050': '#fff0f0',
          width: hovered ? '20%': '20%',
          justifyContent: 'center', flexDirection: 'row'}}>
        <Text
          style={{ fontSize: 18,
            color: hovered ? '#000': '#888',
            fontWeight: hovered ? 'bold': 'normal',
            alignSelf: 'center'}}>
          {props.text}
        </Text>
      </Pressable>
    </>
  )
}

function FilterModal(props){
  return(
    <>
      <View style={{backgroundColor: '#f00'}}>
        <Modal
          animationType="slide"
          visible={props.modalVisible}
          transparent
          onRequestClose={props.modalClose}
        >
          <View style={{ backgroundColor: 'rgba(0,0,0,.6)', width: '100%', flex: 1,
            alignSelf: 'center',}}>
            <View style={{width: '60%', backgroundColor: '#fff',margin: 40,
              borderRadius: 30, flex: 1, alignSelf: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <ModalTitle {...props} text={'Filters'}/>
                <Pressable
                  onPress={props.modalClose}
                  style={{margin: 20, alignItems: 'center'}}>
                  <Ionicons name={'close-circle'} size={45}/>
                </Pressable>
              </View>
              <ApplyButtons/>
            </View>


          </View>

        </Modal>
      </View>
    </>
  )
}

function ApplyButtons(props){
  const [hovered, setHovered] = React.useState(false)
  const [hoveredB, setHoveredB] = React.useState(false)
  return(
    <>
      <View style={{ alignSelf: 'center', justifyContent: 'space-between', width: '60%',
        flexDirection: 'row', position: 'absolute', bottom: 10,
        alignItems: 'center'}}>
        <Pressable
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => setHovered(false)}
          style={{backgroundColor:hovered ?  '#ff5050': '#fff0f0',  width: '45%', alignItems: 'center',
            height: 50, justifyContent: 'center', padding: 20, borderRadius: 30}}>
          <Text style={{ fontWeight: hovered ? 'bold': 'normal', color: hovered ? '#000':'#555', fontSize: 18}}>
            Clear Filters
          </Text>
        </Pressable>
        <Pressable
          onHoverIn={() => setHoveredB(true)}
          onHoverOut={() => setHoveredB(false)}
          style={{backgroundColor: hoveredB ? '#50ff50':'#f0fff0', width: '45%', alignItems: 'center',
            height: 50, justifyContent: 'center', padding: 20, borderRadius: 30}}>
          <Text style={{ fontWeight: hoveredB ? 'bold': 'normal', color: hoveredB ? '#000':'#555', fontSize: 18}}>
            Apply Filters
          </Text>
        </Pressable>
      </View>
    </>
  )
}

function ModalTitle(props){
  return(
    <>
      <View>
        <Text style={{ fontSize: 35, color: '#000', fontWeight: 'bold', margin: 20}}>
          {props.text}
        </Text>
      </View>
    </>
  )
}

function AccountModal(props){
  return(
    <>
      <View style={{backgroundColor: '#f00'}}>
        <Modal
          animationType="slide"
          visible={props.modalVisible}
          transparent
          onRequestClose={props.modalClose}
        >
          <View style={{ backgroundColor: 'rgba(0,0,0,.6)', width: '100%', flex: 1,
            alignSelf: 'center',}}>
            <View style={{width: '60%', backgroundColor: '#fff',margin: 40,
              borderRadius: 30, flex: 1, alignSelf: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <ModalTitle {...props} text={'Account'}/>
                <Pressable
                  onPress={props.modalClose}
                  style={{margin: 20, alignItems: 'center'}}>
                  <Ionicons name={'close-circle'} size={45}/>
                </Pressable>
              </View>
              <LogoutButton/>
            </View>
          </View>

        </Modal>
      </View>
    </>
  )
}

function LoadingModal(props){
  return(
    <>
      <View style={{backgroundColor: '#f00'}}>
        <Modal
          animationType="slide"
          visible={props.loadingVisible}
          transparent
          onRequestClose={props.loadingClose}
        >
          <View style={{ backgroundColor: 'rgba(0,0,0,.6)', width: '100%', flex: 1, justifyContent: 'center',
            alignSelf: 'center',}}>
            <View style={{width: '20%', backgroundColor: '#fff',margin: 40, height: '30%', justifyContent:'center',
              borderRadius: 30,  alignSelf: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                {/*<ModalTitle {...props} text={'Account'}/>*/}
                {/*<Pressable*/}
                {/*  onPress={props.loadingClose}*/}
                {/*  style={{margin: 20, alignItems: 'center'}}>*/}
                {/*  <Ionicons name={'close-circle'} size={45}/>*/}
                {/*</Pressable>*/}
              </View>
              <ActivityIndicator color={'#ff5050'} size={70}/>
            </View>
          </View>

        </Modal>
      </View>
    </>
  )
}

function LogoutButton(props){
  const [hovered, setHovered] = React.useState(false)
  return(
    <>
      <View style={{ alignSelf: 'center', justifyContent: 'center', width: '60%',
        flexDirection: 'row', position: 'absolute', bottom: 10,
        alignItems: 'center'}}>
        <Pressable
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => setHovered(false)}
          style={{backgroundColor:hovered ?  '#ff5050': '#fff0f0',  width: '60%', alignItems: 'center',
            height: 50, justifyContent: 'center', padding: 20, borderRadius: 30}}>
          <Text style={{ fontWeight: hovered ? 'bold': 'normal', color: hovered ? '#000':'#555', fontSize: 18}}>
            Logout
          </Text>
        </Pressable>
      </View>
    </>
  )
}

export {NavBar, SearchBar, FilterModal, ModalTitle, LogoutButton, AccountModal, LoadingModal}
