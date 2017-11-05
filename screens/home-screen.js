// @flow

import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

const HomeScreen = ({navigation}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('DeckBuilder')}
      title='Go to deck building'
    />
  </View>
);

export default HomeScreen;
