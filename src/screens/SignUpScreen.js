import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> ユーザー登録 </Text>
        <TextInput style={styles.input} value="Emaail Address" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#c93467"
          onPress={() => {
            alert('Sign up');
          }}
        >
          <Text style={styles.buttonTitle}> Sign up </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#EEE',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8
  },
  button: {
    backgroundColor: '#FF4181',
    height: 48,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '70%'
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default SignUpScreen;
