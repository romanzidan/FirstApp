import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import BasicJavascript from './pages/BasicJavascript';
import Communication from './pages/Communication';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import ReactNativeSvg from './pages/ReactNativeSvg';
import SampleComponent from './pages/SampleComponent';
import StateDinamis from './pages/StateDinamis';
import StylingComponent from './pages/StylingComponent';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false);
  //   }, 6000);
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* {isShow && <FlexBox />} */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <ReactNativeSvg /> */}
        <BasicJavascript />
      </ScrollView>
    </View>
  );
};

export default App;
