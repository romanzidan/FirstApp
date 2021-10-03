import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

export default function Product(props) {
  const {onBtnPress} = props;
  return (
    <View style={styles.wrapper}>
      <Image source={macbook} style={styles.image} />
      <Text style={styles.name}>New Macbook Pro 2020</Text>
      <Text style={styles.price}>Rp. 25.000.000,-</Text>
      <Text style={styles.location}>Banjarbaru, Indonesia</Text>
      <TouchableOpacity onPress={onBtnPress}>
        <View style={styles.btnWrapper}>
          <Text style={styles.btnText}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#dfe6e9',
    width: 212,
    borderRadius: 8,
  },
  image: {width: 188, height: 107, borderRadius: 8},
  name: {fontSize: 16, fontWeight: 'bold', marginTop: 16},
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0984e3',
    marginTop: 6,
  },
  location: {
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 10,
  },
  btnWrapper: {
    backgroundColor: '#0984e3',
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
