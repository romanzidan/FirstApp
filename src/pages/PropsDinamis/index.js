import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = props => {
  const {title, image} = props;
  return (
    <View style={{padding: 12, alignItems: 'center'}}>
      <Image
        source={{uri: image}}
        style={{width: 50, height: 50, borderRadius: 50 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{title}</Text>
    </View>
  );
};

export default function PropsDinamis() {
  return (
    <>
      <Text>Props Dinamis</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Story
            title="Mahrez"
            image="https://randomuser.me/api/portraits/men/81.jpg"
          />
          <Story
            title="Pujanbi"
            image="https://randomuser.me/api/portraits/men/38.jpg"
          />
          <Story
            title="Lebron"
            image="https://randomuser.me/api/portraits/men/80.jpg"
          />
          <Story
            title="James"
            image="https://randomuser.me/api/portraits/men/54.jpg"
          />
          <Story
            title="Harry"
            image="https://randomuser.me/api/portraits/men/42.jpg"
          />
          <Story
            title="Stephen"
            image="https://randomuser.me/api/portraits/men/79.jpg"
          />
          <Story
            title="Jimmy"
            image="https://randomuser.me/api/portraits/men/66.jpg"
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
