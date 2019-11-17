import React from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../../src/elements/CircleButton';

class MemoAddScreen extends React.Component {
  state = {
    body: ''
  };

  handleSubmit() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`)
      .add({
        body: this.state.body,
        createDate: new Date()
      })
      .then(() => {
        this.props.navigation.goBack();
      })
      .catch(() => {});
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
        keyboardVerticalOffset={80}
      >
        <TextInput
          style={styles.memoEditInput}
          value={this.state.body}
          multiline
          onChangeText={text => {
            this.setState({ body: text });
          }}
          textAlignVertical="top"
        />
        <CircleButton name="checked" onPress={this.handleSubmit.bind(this)} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  memoEditInput: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16
  }
});

export default MemoAddScreen;
