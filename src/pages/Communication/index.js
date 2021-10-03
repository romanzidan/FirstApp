import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

export default function Communication() {
  const [totalProduct, setTotalProduct] = useState(0);
  const addProduct = () => {
    setTotalProduct(totalProduct + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Komunikasi Component</Text>
      <Cart quantity={totalProduct} />
      <Product onBtnPress={addProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
