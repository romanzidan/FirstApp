import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from './cart.png';

export default function PositionReactNative() {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.cartWrapper}>
          <Image source={cart} style={styles.iconCart} />
          <Text style={styles.notif}>12</Text>
        </View>
        <Text style={styles.text}>Keranjang Belanja Anda</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#2b2b2b',
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCart: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 12,
    color: '#2b2b2b',
    fontWeight: '700',
    marginTop: 12,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#0652DD',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
