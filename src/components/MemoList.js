import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList
} from 'react-native';

const dateString = date => {
  if (date == null) {
    return '';
  }

  return date
    .toDate()
    .toISOString()
    .split('T')[0];
};
class MemoList extends React.Component {
  renderMemo({ item }) {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.navigation.navigate('MemoDetailScreen', { memo: item });
        }}
      >
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.body.substring(0, 10)}</Text>
          <Text style={styles.memoDate}> {dateString(item.createDate)} </Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.memoList}>
        <FlatList
          data={this.props.memoList}
          renderItem={this.renderMemo.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    backgroundColor: '#FFF'
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2'
  }
});

export default MemoList;
