import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function TimeAdjusters({ sessionVal, breakVal, incrementTime }) {
  return (
    <React.Fragment>
      <TouchableHighlight onPress={() => incrementTime()}>
        <View>
          <Text style={{ fontSize: 30 }}>&#8593;</Text>
        </View>
      </TouchableHighlight>
      <Text>{sessionVal}</Text>

      <Text style={{ fontSize: 30 }}>&#8595;</Text>
    </React.Fragment>
  );
}
