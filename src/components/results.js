import * as React from 'react'
import {FlatList, View, Text, Pressable, Image, Modal} from "react-native-web";
import {AccountModal, FilterModal, ModalTitle, SearchBar} from "./variant";
import Ionicons from "react-native-vector-icons/dist/Ionicons";


function NavBar(props){
  const [modalVisible, setModalVisible] = React.useState(false)
  const [modalVisibleB, setModalVisibleB] = React.useState(false)
  const [loadingVisible, setLoadingVisible] = React.useState(false)
  return(
    <>
      <View style={{backgroundColor: '#f0f0ff', height: 80, flexDirection: 'row' ,
        alignItems: 'center',
        shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10,
        justifyContent: 'space-between', padding: 20}}>
        <Pressable
          onPress={() => props.appStateDispatch({type: 'change_screen', nextScreen: 'home'})}>
          <Image
            source={require('../assets/africa.png')}
            style={{ width: 50, height: 50, borderRadius: 30}}
          />
        </Pressable>
        <SearchBar
          {...props}
          onPress={() => setModalVisible(true)}
          loadingVisible={loadingVisible}
          loadingClose={() => setLoadingVisible(false)}
        />
        <Pressable
          onPress={() => setModalVisibleB(true)}
          style={{margin: 0, alignItems: 'center'}}>
          <Ionicons name={'person-circle-outline'} size={60}/>
        </Pressable>
      </View>
      <FilterModal
        modalVisible={modalVisible}
        modalClose={() => setModalVisible(false)}
      />
      <AccountModal
        modalVisible={modalVisibleB}
        modalClose={() => setModalVisibleB(false)}
      />
    </>
  )
}


function ResultView(props){
  return(
    <>
      <View style={{width: '65%', alignSelf: 'center',
        borderRadius: 20, flex: 1,
        backgroundColor: '#f5f5fc', padding: 20}}>
        <Header/>
        <FlatList
          data={props.appState.variant_results}
          renderItem={(item) => (<Item item={item.item}/>)}
          // stickyHeaderIndices={[0]}
          // ListHeaderComponent={(<Header/>)}
          // style={{width: '65%', alignSelf: 'center',
          //   borderRadius: 20,
          //   backgroundColor: '#f5f5fc', padding: 20}}
        />
      </View>
    </>
  )
}

function Header(props){
  let style={fontSize: 20, margin: 5, fontWeight: 'bold'}
  return(
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10, marginLeft: 10,
        // backgroundColor: '#f5f5ff', height: 40,
        alignItems: 'flex-start', width: '100%'}}>
        <View style={{width: '20%'}}><Text style={style}>ID</Text></View>
        <View style={{width: '10%'}}><Text style={style}>Type</Text></View>
        <View style={{width: '10%'}}><Text style={style}>Chrom</Text></View>
        <View style={{width: '20%'}}><Text style={style}>Position</Text></View>
        {/*<View style={{width: '10%'}}><Text style={style}>End</Text></View>*/}
        <View style={{width: '10%'}}><Text style={style}>Ref</Text></View>
        <View style={{width: '10%'}}><Text style={style}>Alt</Text></View>
      </View>
    </>
  )
}

function Item(item){
  let style={fontSize: 17, margin: 5, fontWeight: 'normal'}
  const [hovered, setHovered] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false)
  return(
    <>
      <Pressable
        onPress={() => setModalVisible(true)}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingLeft: 10,
          backgroundColor: hovered ? '#f0f0ff':'#fff', paddingTop: 20, paddingBottom: 20,
          alignItems: 'flex-start', width: '100%', borderRadius: 10,}}>
        <View style={{width: '20%'}}><Text style={style}>{item.item.id}</Text></View>
        <View style={{width: '10%'}}><Text style={style}>{item.item.type}</Text></View>
        <View style={{width: '10%'}}><Text style={style}>{item.item.chromosome}</Text></View>
        <View style={{width: '20%'}}><Text style={style}>{item.item.start}</Text></View>
        {/*<View style={{width: '10%'}}><Text style={style}>{item.item.end}</Text></View>*/}
        <View style={{width: '10%'}}><Text style={style}>{item.item.reference}</Text></View>
        <View style={{width: '10%'}}><Text style={style}>{item.item.alternate}</Text></View>
      </Pressable>
      <VariantModal
        modalVisible={modalVisible}
        modalClose={() => setModalVisible(false)}
      />
    </>
  )
}

function VariantModal(props){
  return(
    <>
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
                  <ModalTitle {...props} text={'Variant view'}/>
                  <Pressable
                    onPress={props.modalClose}
                    style={{margin: 20, alignItems: 'center'}}>
                    <Ionicons name={'close-circle'} size={45}/>
                  </Pressable>
                </View>
              </View>
            </View>

          </Modal>
        </View>
      </>
    </>
  )
}

export {ResultView, NavBar, Header}
