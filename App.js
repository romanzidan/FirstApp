import React from 'react';
import {ScrollView, View} from 'react-native';
import FlexBox from './FlexBox';
import PositionReactNative from './PositionReactNative';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <FlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
