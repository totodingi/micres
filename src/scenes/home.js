import * as React from 'react'
import {View, useWindowDimensions, ImageBackground} from "react-native-web";
import {AboutText, GetStarted, NavBar, TitleText} from "../components/home";

function Home(props) {
  let images = [  'dr5.jpg']
  let [bg, setBg] = React.useState('dr5.jpg')

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setBg(images[images.length * Math.random() | 0]);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ImageBackground
      source={require(`../assets/${bg}`)}
      imageStyle={{opacity: 0.8}}
      style={{flex: 1, backgroundColor: '#fff', height: useWindowDimensions().height}}>
      <NavBar {...props}/>
      <View
        style={{flex: 1,  justifyContent: 'center'}}>

        <TitleText/>

        <AboutText {...props}/>

        <GetStarted {...props} text={'Get Started'} onPress={() => props.appStateDispatch({type: 'change_screen', nextScreen: 'signup'})}/>
      </View>
    </ImageBackground>

  );
}

export default Home;
