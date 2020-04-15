import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function TimeAdjusters({
  sessionVal,
  breakVal,
  incrementSessionTime,
  decrementSessionTime,
  incrementBreakTime,
  decrementBreakTime,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <Text>Work</Text>
        <TouchableHighlight onPress={() => incrementSessionTime()}>
          <View>
            <Text style={{ fontSize: 30 }}>&#8593;</Text>
          </View>
        </TouchableHighlight>
        <Text>{sessionVal}</Text>
        <TouchableHighlight onPress={() => decrementSessionTime()}>
          <View>
            <Text style={{ fontSize: 30 }}>&#8595;</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.controls}>
        <Text>Break</Text>
        <TouchableHighlight onPress={() => incrementBreakTime()}>
          <View>
            <Text style={{ fontSize: 30 }}>&#8593;</Text>
          </View>
        </TouchableHighlight>
        <Text>{breakVal}</Text>
        <TouchableHighlight onPress={() => decrementBreakTime()}>
          <View>
            <Text style={{ fontSize: 30 }}>&#8595;</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  controls: {
    alignItems: 'center',
  },
});
