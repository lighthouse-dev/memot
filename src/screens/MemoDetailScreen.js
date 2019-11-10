import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}> 講座のアイデア</Text>
              <Text style={styles.memoHeaderDate}> 2019.11.10</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>講座のアイデアです</Text>
        </View>

        <CircleButton
          name="pencil"
          color="white"
          style={styles.editButton}
          onPress={() => {
            this.props.navigation.navigate('MemoEditScreen');
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
    color: 'white',
    marginBottom: 4
  },
  memoHeaderDate: {
    fontSize: 12,
    color: 'white'
  },
  memoContent: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: 'white'
  },
  editButton: {
    top: 40,
    right: 15
  }
});

export default MemoDetailScreen;
