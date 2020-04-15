import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import moment from 'moment';

export default function TimeAdjusters({
  sessionVal,
  breakVal,
  incrementSessionTime,
  decrementSessionTime,
  incrementBreakTime,
  decrementBreakTime,
}) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
