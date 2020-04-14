import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useInterval } from './hooks/useInterval';
import moment from 'moment';

export default function App() {
  const [sessionVal, setSessionVal] = useState(25);
  const [time, setTime] = useState(sessionVal * 60 * 1000);
  const [active, setActive] = useState(false);

  useInterval(() => setTime(time - 1000), active ? 1000 : null);

  useEffect(() => {
    setTime(sessionVal * 60 * 1000);
  }, [sessionVal]);

  const activeSwitch = () => setActive(!active);

  return (
    <View style={styles.container}>
      <Text>
        {moment
          .utc(moment.duration(time, 'ms').asMilliseconds())
          .format('mm:ss')}
      </Text>
      <Button title="Start" onPress={() => activeSwitch()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
