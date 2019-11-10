import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../../src/elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    key: '',
    body: ''
  };

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({
      key: params.memo.key,
      body: params.memo.body
    });
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    firebase
      .firestore()
      .collection(`users/${currentUser.uid}/memos`)
      .doc(this.state.key)
      .update({
        body: this.state.body
      })
      .then(() => {
        console.log('update success.');
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          value={this.state.body}
          onChangeText={text => {
            this.setState({
              body: text
            });
          }}
          multiline
        />
        <CircleButton name="checked" onPress={this.handlePress.bind(this)} />
      </View>
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

export default MemoEditScreen;
