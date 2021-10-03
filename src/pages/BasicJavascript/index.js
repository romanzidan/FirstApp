import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function BasicJavascript() {
  // primitive
  const nama = 'Kyze Luci';
  let usia = 24;
  const apakahPria = true;

  // complex
  const hewanPeliharaan = {
    nama: 'Meow',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'kuning',
    babu: {
      nama: 'Luki',
    },
  }; // object

  const sapaOrang = (name, age) => {
    return console.log(`Nama Saya ${name} umur saya ${age}`);
  };

  sapaOrang('Roman', 18);

  const namaOrang = ['Roman', 'Zidan', 'Ramadhan']; //object array

  typeof namaOrang; //object

  return (
    <View>
      <Text>Basic Javascript</Text>

      <Text>Nama : {nama}</Text>
      <Text>Usia : {usia}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
