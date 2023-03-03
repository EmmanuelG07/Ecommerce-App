import React from "react";
import {View, Text} from 'react-native';
import { Provider } from "react-redux";

import AppStack from "./Src/Navigations/AppStack";
import MainContainer from "./Src/Navigations/MainContainer";
import Store from "./Src/redux/store/Store";


const App = () => {
  return(
    <Provider store={Store}>
      <MainContainer />
    </Provider>
  )
}

export default App;