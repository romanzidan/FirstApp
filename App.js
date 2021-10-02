import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 50, height: 50, backgroundColor: '#0984e3'}} />
      <Text>Kyze Luci Garendra</Text>
      <Nama />
      <Foto />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Nama = () => {
  return <Text>Roman Zidan</Text>;
};

const Foto = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;
