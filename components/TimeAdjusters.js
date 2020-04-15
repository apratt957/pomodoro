import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
        <TouchableOpacity onPress={() => incrementSessionTime()}>
          <View>
            <Text style={styles.controlArrows}>&#8593;</Text>
          </View>
        </TouchableOpacity>
        <Text>{sessionVal}</Text>
        <TouchableOpacity onPress={() => decrementSessionTime()}>
          <View>
            <Text style={styles.controlArrows}>&#8595;</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.controls}>
        <Text>Break</Text>
        <TouchableOpacity onPress={() => incrementBreakTime()}>
          <View>
            <Text style={styles.controlArrows}>&#8593;</Text>
          </View>
        </TouchableOpacity>
        <Text>{breakVal}</Text>
        <TouchableOpacity onPress={() => decrementBreakTime()}>
          <View>
            <Text style={styles.controlArrows}>&#8595;</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 200,
  },
  controls: {
    alignItems: 'center',
  },
  controlText: {},
  controlArrows: {
    fontSize: 40,
  },
});
