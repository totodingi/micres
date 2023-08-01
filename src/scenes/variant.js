import * as React from 'react'
import {useWindowDimensions, View} from "react-native-web";
import {InputsTitle} from "../components/signup";
import {SearchBar, NavBar, FilterModal} from "../components/variant";



function Variant(props){
  const [modalVisible, setModalVisible] = React.useState(false)
  const [loadingVisible, setLoadingVisible] = React.useState(false)

  function onSearch(){
    setLoadingVisible(true)
    let body = {gene: props.appState.query, limit: '10',
      token: props.appState.token}
    console.log(body)
    fetch("http://127.0.0.1:8000/variant", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
      .then((data) => {
        setLoadingVisible(false)
        console.log(data)
        props.appStateDispatch({type: 'set_variant_results', variant_results: data})
        props.appStateDispatch({type: 'change_screen', nextScreen: 'results'})
      })
      .catch(e => console.error(e))
  }

  return(
    <>
      <View style={{flex: 1, backgroundColor: '#fff', height: useWindowDimensions().height}}>
        <NavBar {...props}/>
        <InputsTitle {...props} text={'Search Variants Here'}/>
        <SearchBar
          {...props}
          onSearch={() => onSearch()}
          onPress={() => setModalVisible(true)}
          loadingVisible={loadingVisible}
          loadingClose={() => setLoadingVisible(false)}
        />
        <FilterModal
          modalVisible={modalVisible}
          modalClose={() => setModalVisible(false)}
        />
      </View>
    </>
  )
}

export default Variant
