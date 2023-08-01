import * as React from 'react'
import {useWindowDimensions, View} from "react-native-web";
import {InputsTitle} from "../components/signup";
import {ResultView} from "../components/results";
import {NavBar as SearchNav} from '../components/results'

function Results(props){
  return(
    <>
      <View style={{flex: 1, backgroundColor: '#fff', height: useWindowDimensions().height}}>
        {/*<NavBar {...props}/>*/}
        <SearchNav {...props}/>
        <InputsTitle {...props} text={'Search Results'}/>
        <ResultView {...props}/>
      </View>
    </>
  )
}


export default Results
