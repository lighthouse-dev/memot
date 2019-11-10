import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../../src/elements/CircleButton';

class MemoAddScreen extends React.Component {
  state = {
    body: ''
  };

  handleSubmit() {
    const { params } = this.props.navigation.state;
    const db = firebase.firestore();
    // db.settings({ timestampsInSnapshots: true });
    db.collection(`users/${params.currentUser.user.uid}/memos`)
      .add({
        body: this.state.body,
        created_at: new Date()
      })
      .then(ref => {
        console.log('Added document with ID: ', ref.id);
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
          multiline
          onChangeText={text => {
            this.setState({ body: text });
          }}
        />
        <CircleButton name="checked" onPress={this.handleSubmit.bind(this)} />
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

export default MemoAddScreen;
