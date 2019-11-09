import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleAddButton}>
        <Text style={styles.circleAddButtonTitle}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#FF4181',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  circleAddButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: 'white'
  }
});

export default CircleButton;
