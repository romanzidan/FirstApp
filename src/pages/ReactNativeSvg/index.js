import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IllustrationMyApp from '../../assets/images/my_app.svg';

export default function ReactNativeSvg() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Menggunakan File SVG di React Native</Text>
      <IllustrationMyApp width={244} height={125} style={styles.svgImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', fontWeight: '500'},
  svgImage: {
    marginTop: 20,
  },
});
