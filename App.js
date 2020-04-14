import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useInterval } from './hooks/useInterval';
import moment from 'moment';

export default function App() {
  const [sessionVal, setSessionVal] = useState(0.1);
  const [breakVal, setBreakVal] = useState(0.3);
  const [time, setTime] = useState(sessionVal * 60 * 1000);
  const [active, setActive] = useState(false);
  const [working, setWorking] = useState(true);

  useInterval(() => setTime(time - 1000), active ? 1000 : null);

  // useEffect(() => {
  //   setTime(sessionVal * 60 * 1000);
  // }, [sessionVal]);

  useEffect(() => {
    if (time === 0) {
      setWorking(!working);
      working === false
        ? setTime(sessionVal * 60 * 1000)
        : setTime(breakVal * 60 * 1000);
    }
  });

  const activeSwitch = () => setActive(!active);

  return (
    <View style={styles.container}>
      <Text>
        {moment
          .utc(moment.duration(time, 'ms').asMilliseconds())
          .format('mm:ss')}
      </Text>
      <Button
        title={active ? 'Stop' : 'Start'}
        onPress={() => activeSwitch()}
      />
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
