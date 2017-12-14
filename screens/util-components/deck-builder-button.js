/**
 * @flow
 */
'use strict';

import React from 'React';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native';

class DeckBuilderButton extends React.Component<{
  title: string,
  onPress: () => any,
  style?: $FlowFixMe,
  textStyle?: $FlowFixMe,
  disabledStyle?: $FlowFixMe,
  accessibilityLabel?: ?string,
  disabled?: ?boolean,
}> {

  render() {
    const {
      accessibilityLabel,
      style,
      textStyle,
      onPress,
      title,
      disabled,
      disabledStyle,
    } = this.props;
    const buttonStyles = [styles.button, style];
    const textStyles = [styles.text, textStyle];
    const accessibilityTraits = ['button'];
    if (disabled) {
      buttonStyles.push(styles.buttonDisabled);
      buttonStyles.push(disabledStyle);
      textStyles.push(styles.textDisabled);
      accessibilityTraits.push('disabled');
    }
    const formattedTitle = Platform.OS === 'android' ? title.toUpperCase() : title;
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <Touchable
        accessibilityComponentType="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={accessibilityTraits}
        disabled={disabled}
        onPress={onPress}>
        <View style={buttonStyles}>
          <Text style={textStyles} disabled={disabled}>{formattedTitle}</Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  button: Platform.select({
    ios: {
      alignItems: 'center',
    },
    android: {
      alignItems: 'center',
      elevation: 4,
      // Material design blue from https://material.google.com/style/color.html#color-color-palette
      backgroundColor: '#2196F3',
      borderRadius: 2,
    },
  }),
  text: Platform.select({
    ios: {
      // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
      color: '#007AFF',
      textAlign: 'center',
      fontSize: 18,
    },
    android: {
      color: 'white',
      textAlign: 'center',
      fontWeight: '500',
    },
  }),
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: '#dfdfdf',
    }
  }),
  textDisabled: Platform.select({
    ios: {
      color: '#cdcdcd',
    },
    android: {
      color: '#a1a1a1',
    }
  }),
});

module.exports = DeckBuilderButton;
