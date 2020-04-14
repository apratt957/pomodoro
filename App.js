import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useInterval } from './hooks/useInterval';
import Timer from './components/Timer';
import moment from 'moment';

export default function App() {
  const [sessionVal, setSessionVal] = useState(25);
  const [breakVal, setBreakVal] = useState(5);
  const [time, setTime] = useState(sessionVal * 60 * 1000);
  const [active, setActive] = useState(false);
  const [working, setWorking] = useState(true);

  useInterval(() => setTime(time - 1000), active ? 1000 : null);

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
      <Timer time={time} />
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
