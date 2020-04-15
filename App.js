import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { useInterval } from './hooks/useInterval';
import Timer from './components/Timer';
import TimeAdjusters from './components/TimeAdjusters';

export default function App() {
  const [sessionVal, setSessionVal] = useState(1);
  const [breakVal, setBreakVal] = useState(5);
  const [time, setTime] = useState(sessionVal * 60 * 1000);
  const [active, setActive] = useState(false);
  const [working, setWorking] = useState(true);

  useInterval(() => setTime(time - 1000), active ? 1000 : null);

  useEffect(() => {
    setTime(sessionVal * 60 * 1000);
  }, [sessionVal]);

  useEffect(() => {
    if (time === 0) {
      working === true
        ? setTime(breakVal * 60 * 1000)
        : setTime(sessionVal * 60 * 1000);
      setWorking(!working);
    }
  });

  const activeSwitch = () => setActive(!active);

  const resetTime = () => {
    setTime(sessionVal * 60 * 1000);
    if (active) setActive(!active);
    setWorking(true);
  };

  const incrementSessionTime = () => {
    if (sessionVal < 59) setSessionVal((prevVal) => prevVal + 1);
  };
  const decrementSessionTime = () => {
    if (sessionVal > 1) setSessionVal((prevVal) => prevVal - 1);
  };
  const incrementBreakTime = () => {
    if (breakVal < 59) setBreakVal((prevVal) => prevVal + 1);
  };
  const decrementBreakTime = () => {
    if (breakVal > 1) setBreakVal((prevVal) => prevVal - 1);
  };

  return (
    <View style={styles.container}>
      <Timer time={time} />
      <Button
        title={active ? 'Pause' : 'Start'}
        onPress={() => activeSwitch()}
      />
      <Button title="Reset" onPress={() => resetTime()} />
      <TimeAdjusters
        sessionVal={sessionVal}
        breakVal={breakVal}
        incrementSessionTime={incrementSessionTime}
        decrementSessionTime={decrementSessionTime}
        incrementBreakTime={incrementBreakTime}
        decrementBreakTime={decrementBreakTime}
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
