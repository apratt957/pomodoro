import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useInterval } from './hooks/useInterval';
import { useFonts } from '@use-expo/font';
import Timer from './components/Timer';
import TimeAdjusters from './components/TimeAdjusters';

export default function App() {
  const [sessionVal, setSessionVal] = useState(25);
  const [breakVal, setBreakVal] = useState(5);
  const [time, setTime] = useState(sessionVal * 60 * 1000);
  const [active, setActive] = useState(false);
  const [working, setWorking] = useState(true);

  let [fontsLoaded] = useFonts({
    ConcertOne: require('./fonts/ConcertOne-Regular.ttf'),
  });

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

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <View style={styles.container}>
        {working ? (
          <Text style={styles.title}>Time To Work!</Text>
        ) : (
          <Text style={styles.title}>Time To Rest!</Text>
        )}
        <Timer time={time} />
        <TimeAdjusters
          sessionVal={sessionVal}
          breakVal={breakVal}
          incrementSessionTime={incrementSessionTime}
          decrementSessionTime={decrementSessionTime}
          incrementBreakTime={incrementBreakTime}
          decrementBreakTime={decrementBreakTime}
        />
        <Button
          titleStyle={styles.buttonText}
          containerStyle={styles.buttonContainer}
          title={active ? 'Pause' : 'Start'}
          onPress={() => activeSwitch()}
        />
        <Button
          titleStyle={styles.buttonText}
          containerStyle={styles.buttonContainer}
          type="clear"
          title="Reset"
          onPress={() => resetTime()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'ConcertOne',
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'ConcertOne',
    fontSize: 30,
    marginBottom: 10,
  },
  buttonContainer: {
    width: 100,
    alignSelf: 'center',
  },
});
