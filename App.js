import React from 'react';
import {ScrollView, View} from 'react-native';
import FlexBox from './FlexBox';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        <FlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
