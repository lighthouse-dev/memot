import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

const dateString = date => {
  return date
    .toDate()
    .toISOString()
    .split('T')[0];
};
class MemoDetailScreen extends React.Component {
  state = {
    memo: {}
  };

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  render() {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>
                {memo.body.substring(0, 10)}
              </Text>
              <Text style={styles.memoHeaderDate}>
                {dateString(memo.createDate)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}> {memo.body} </Text>
        </View>

        <CircleButton
          name="pencil"
          color="white"
          style={styles.editButton}
          onPress={() => {
            this.props.navigation.navigate('MemoEditScreen', { memo });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10
  },
  memoHeaderTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#FFF'
  },
  memoContent: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#FFF'
  },
  memoBody: {
    fontSize: 15,
    lineHeight: 25
  },
  editButton: {
    top: 40,
    right: 15
  }
});

export default MemoDetailScreen;
