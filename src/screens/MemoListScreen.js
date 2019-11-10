import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../../src/components/MemoList';
import CircleButton from '../../src/elements/CircleButton';

class MemoListScreen extends React.Component {
  state = {
    memoList: []
  };

  // MemoListScreenコンポーネントがマウント（表示)される前に実行
  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`).onSnapshot(snapshot => {
      const tempMemoList = [];
      snapshot.forEach(doc => {
        tempMemoList.push({ key: doc.id, ...doc.data() });
        console.log(doc.id, '=>', doc.data());
      });
      this.setState({ memoList: tempMemoList });
    });
  }

  handlePress() {
    this.props.navigation.navigate('MemoAddScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList
          memoList={this.state.memoList}
          navigation={this.props.navigation}
        />
        <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6'
  }
});

export default MemoListScreen;
