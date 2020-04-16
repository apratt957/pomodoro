import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Vibration,
  LayoutAnimation,
} from 'react-native';
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
    ConcertOne: require('./assets/fonts/ConcertOne-Regular.ttf'),
  });

  useInterval(() => setTime(time - 1000), active ? 1000 : null);

  useEffect(() => {
    working ? setTime(sessionVal * 60 * 1000) : setTime(breakVal * 60 * 1000);
  }, [sessionVal, breakVal]);

  useEffect(() => {
    if (time === 4000) Vibration.vibrate([1000, 1000, 1000]);
    if (time === 0) {
      working ? setTime(breakVal * 60 * 1000) : setTime(sessionVal * 60 * 1000);
      setWorking(!working);
    }
  });

  const activeSwitch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActive(!active);
  };

  const resetTime = () => {
    setTime(sessionVal * 60 * 1000);
    if (active) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setActive(!active);
    }
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
          <View>
            <Text style={styles.title}>Time To Work!</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.title}>Time To Rest!</Text>
          </View>
        )}
        <Timer time={time} />
        {!active ? (
          <TimeAdjusters
            working={working}
            sessionVal={sessionVal}
            breakVal={breakVal}
            incrementSessionTime={incrementSessionTime}
            decrementSessionTime={decrementSessionTime}
            incrementBreakTime={incrementBreakTime}
            decrementBreakTime={decrementBreakTime}
          />
        ) : null}

        <Button
          titleStyle={styles.startButtonText}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.startButton}
          title={active ? 'Pause' : 'Start'}
          onPress={() => activeSwitch()}
        />
        <Button
          titleStyle={styles.resetButtonText}
          containerStyle={styles.buttonContainer}
          type="clear"
          title="Reset"
          onPress={() => resetTime()}
        />
      </View>
    );
  }
}

const colors = {
  red: '#E83C3C',
  blue: '#388697',
  yellow: '#FFE882',
  pink: '#FFE8E8',
  orange: '#FA8334',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'ConcertOne',
    fontSize: 50,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  startButtonText: {
    fontFamily: 'ConcertOne',
    fontSize: 30,
    marginBottom: 10,
  },
  resetButtonText: {
    fontFamily: 'ConcertOne',
    color: colors.orange,
    fontSize: 30,
    marginBottom: 10,
  },
  startButton: {
    borderRadius: 30,
  },
  buttonContainer: {
    width: 100,
    alignSelf: 'center',
  },
});
