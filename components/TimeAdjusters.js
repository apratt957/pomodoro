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
        <Text style={styles.controlText}>Work</Text>
        <TouchableOpacity onPress={() => incrementSessionTime()}>
          <View>
            <Text style={styles.controlArrows}>&#8593;</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.controlText}>{sessionVal}</Text>
        <TouchableOpacity onPress={() => decrementSessionTime()}>
          <View>
            <Text style={styles.controlArrows}>&#8595;</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.controls}>
        <Text style={styles.controlText}>Break</Text>
        <TouchableOpacity onPress={() => incrementBreakTime()}>
          <View>
            <Text style={styles.controlArrows}>&#8593;</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.controlText}>{breakVal}</Text>
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
    marginBottom: 100,
    marginTop: 30,
  },
  controls: {
    alignItems: 'center',
  },
  controlText: {
    fontSize: 30,
    fontFamily: 'ConcertOne',
  },
  controlArrows: {
    fontSize: 40,
  },
});
