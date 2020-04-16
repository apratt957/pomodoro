import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TimeAdjusters({
  sessionVal,
  breakVal,
  incrementSessionTime,
  decrementSessionTime,
  incrementBreakTime,
  decrementBreakTime,
  stopTimer,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <Text style={styles.controlText}>Work</Text>
        <TouchableOpacity
          onPressIn={() => incrementSessionTime()}
          onPressOut={() => stopTimer()}
        >
          <View>
            <Text style={styles.controlArrows}>&#8593;</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.controlText}>{sessionVal}</Text>
        <TouchableOpacity
          onPressIn={() => decrementSessionTime()}
          onPressOut={() => stopTimer()}
        >
          <View>
            <Text style={styles.controlArrows}>&#8595;</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.controls}>
        <Text style={styles.controlText}>Break</Text>
        <TouchableOpacity
          onPressIn={() => incrementBreakTime()}
          onPressOut={() => stopTimer()}
        >
          <View>
            <Text style={styles.controlArrows}>&#8593;</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.controlText}>{breakVal}</Text>
        <TouchableOpacity
          onPressIn={() => decrementBreakTime()}
          onPressOut={() => stopTimer()}
        >
          <View>
            <Text style={styles.controlArrows}>&#8595;</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const colors = {
  red: '#E83C3C',
  blue: '#0B2033',
  yellow: '#FFE882',
  pink: '#FFE8E8',
  orange: '#FA8334',
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 60,
    marginTop: 30,
  },
  controls: {
    alignItems: 'center',
  },
  controlText: {
    color: colors.pink,
    fontSize: 30,
    fontFamily: 'ConcertOne',
  },
  controlArrows: {
    color: colors.pink,
    fontSize: 40,
  },
  image: {
    height: 270,
    width: 190,
  },
});
