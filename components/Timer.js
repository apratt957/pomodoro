import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

export default function Timer({ time }) {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {moment
          .utc(moment.duration(time, 'ms').asMilliseconds())
          .format('mm:ss')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  time: {
    fontSize: 100,
  },
});
