import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import macbook from './macbook.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#74b9ff',
          borderWidth: 2,
          borderColor: '#d63031',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#dfe6e9',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2020
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#0984e3',
            marginTop: 6,
          }}>
          Rp. 25.000.000,-
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            marginVertical: 10,
          }}>
          Banjarbaru, Indonesia
        </Text>
        <View
          style={{
            backgroundColor: '#0984e3',
            paddingVertical: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d63031',
    marginTop: 40,
    marginLeft: 20,
  },
});

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 50, height: 50, backgroundColor: '#0984e3'}} />
      <Text>Kyze Luci Garendra</Text>
      <Nama />
      <Foto />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
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

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari Class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini Hewan</Text>
      </View>
    );
  }
}

export default App;
