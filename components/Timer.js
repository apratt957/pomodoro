import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useInterval } from '../hooks/useInterval';
import moment from 'moment';

export default function Timer({ time }) {
  return (
    <Text>
      {moment.utc(moment.duration(time, 'ms').asMilliseconds()).format('mm:ss')}
    </Text>
  );
}
