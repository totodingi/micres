import * as React from "react";
import './App.css'
import Home from "./scenes/home";
import Login from "./scenes/login";
import Signup from "./scenes/signup";
import Variant from "./scenes/variant";
import Results from "./scenes/results";


function App() {
  const INITIAL_STATE = {
    currentScreen: 'home',
    token: null,
    username: null,
    password: null,
    query: null,
    variant_results: null
  }
  function reducer(state, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case 'change_screen': {
        // console.log(action)
        return {
          ...state,
          currentScreen: action.nextScreen
        };
      }
      case 'set_token': {
        // console.log(action)
        return {
          ...state,
          token: action.token
        };
      }
      case 'set_username': {
        // console.log(action)
        return {
          ...state,
          username: action.username
        };
      }
      case 'set_password': {
        // console.log(action)
        return {
          ...state,
          password: action.password
        };
      }
      case 'set_query': {
        return {
          ...state,
          query: action.query
        }
      }
      case 'set_variant_results': {
        return {
          ...state,
          variant_results: action.variant_results
        }
      }
    }
    throw Error('Unknown action: ' + action.type);
  }
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
  if (state.currentScreen === 'login'){
    return (<Login {...{appState:state, appStateDispatch:dispatch}} />)
  }
  if (state.currentScreen === 'signup'){
    return (<Signup {...{appState:state, appStateDispatch:dispatch}} />)
  }
  if (state.currentScreen === 'variant'){
    return (<Variant {...{appState:state, appStateDispatch:dispatch}} />)
  }
  if (state.currentScreen === 'results'){
    return (<Results {...{appState:state, appStateDispatch:dispatch}} />)
  }
  return (
    <>
      <Home {...{appState:state, appStateDispatch:dispatch}}/>
    </>
  );
}

export default App;
