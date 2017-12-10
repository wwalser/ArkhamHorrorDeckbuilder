// @flow

import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  style?: {[string]: *},
  children: string | Array<string>,
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
  }
});

export default function ArkhamText(props: Props) {
  return (
    <Text style={[styles.text, props.style]}>{props.children}</Text>
  );
}
