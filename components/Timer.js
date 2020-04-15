import React from 'react';
import { StyleSheet, Text } from 'react-native';
import moment from 'moment';

export default function Timer({ time }) {
  return (
    <Text>
      {moment.utc(moment.duration(time, 'ms').asMilliseconds()).format('mm:ss')}
    </Text>
  );
}
