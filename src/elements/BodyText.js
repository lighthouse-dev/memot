import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.text}>{this.props.children}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  text: {
    color: '#DDD',
    backgroundColor: '#EEE'
  }
});

export default BodyText;
