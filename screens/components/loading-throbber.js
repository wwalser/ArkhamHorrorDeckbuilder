// @flow

import React, { Component } from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  visible: boolean,
  closeThrobber: () => void,
};

const throbberImage = require('../../img/cthulhu.png');

export default class LoadingThrobber extends Component<Props> {
  render(){
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={this.props.visible}
        onRequestClose={this.props.closeThrobber}
      >
        <View style={styles.container}>
          <View style={styles.background}>
            <Image source={throbberImage} />
            <Text style={styles.text}>Loading Cards</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    height: 150,
    width: 300,
    backgroundColor: 'rgba(23, 30, 30, 0.7)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
