import React, { useState, useEffect } from 'react';
import { View, Text, Vibration, LayoutAnimation, Switch } from 'react-native';
import { Button } from 'react-native-elements';
import { useTheme } from 'react-native-themed-styles';
import { useInterval } from './hooks/useInterval';
import { useFonts } from '@use-expo/font';
import { Audio } from 'expo-av';
import { styleSheetFactory } from './hooks/themes';
import Timer from './components/Timer';
import TimeAdjusters from './components/TimeAdjusters';

export default function App() {
  const [sessionVal, setSessionVal] = useState(25);
  const [breakVal, setBreakVal] = useState(5);
  const [time, setTime] = useState(sessionVal * 60 * 1000);
  const [active, setActive] = useState(false);
  const [working, setWorking] = useState(true);
  const [timer, setTimer] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [isEnabled, setIsEnabled] = useState('false');

  const soundObject = new Audio.Sound();
  const loadAndPlayAlert = async () => {
    try {
      await soundObject.loadAsync(require('./assets/sounds/alert.mp3'));
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

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
      loadAndPlayAlert();
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

  const stopTimer = () => {
    setTimer((prevVal) => clearTimeout(prevVal));
  };

  const incrementSessionTime = () => {
    if (sessionVal < 59) {
      setSessionVal((prevVal) => prevVal + 1);
      setTimer(setTimeout(incrementSessionTime, 300));
    }
  };
  const decrementSessionTime = () => {
    if (sessionVal > 1) {
      setSessionVal((prevVal) => prevVal - 1);
      setTimer(setTimeout(decrementSessionTime, 300));
    }
  };
  const incrementBreakTime = () => {
    if (breakVal < 59) {
      setBreakVal((prevVal) => prevVal + 1);
      setTimer(setTimeout(incrementBreakTime, 300));
    }
  };
  const decrementBreakTime = () => {
    if (breakVal > 1) {
      setBreakVal((prevVal) => prevVal - 1);
      setTimer(setTimeout(decrementBreakTime, 300));
    }
  };

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
    setIsEnabled((prevState) => !prevState);
  };

  const [styles] = useTheme(themedStyles, theme);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Switch
          style={styles.switchContainer}
          thumbColor={styles.resetButtonText.color}
          ios_backgroundColor={styles.switchContainer.color}
          trackColor={{
            false: styles.switchContainer.color,
            true: styles.switchContainer.color,
          }}
          onValueChange={() => changeTheme()}
          value={!isEnabled}
        />
        {working ? (
          <View>
            <Text style={styles.title}>Time To Work</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.title}>Time To Rest</Text>
          </View>
        )}
        <Timer time={time} theme={theme} />
        {!active ? (
          <TimeAdjusters
            sessionVal={sessionVal}
            breakVal={breakVal}
            incrementSessionTime={incrementSessionTime}
            decrementSessionTime={decrementSessionTime}
            incrementBreakTime={incrementBreakTime}
            decrementBreakTime={decrementBreakTime}
            stopTimer={stopTimer}
            theme={theme}
          />
        ) : null}
        <Button
          titleStyle={styles.startButtonText}
          containerStyle={styles.buttonContainer}
          type="clear"
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

const themedStyles = styleSheetFactory((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    justifyContent: 'center',
  },
  switchContainer: {
    alignSelf: 'center',
    color: theme.textColor,
  },
  title: {
    color: theme.textColor,
    fontFamily: 'ConcertOne',
    fontSize: 50,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  startButtonText: {
    color: theme.textColor,
    fontFamily: 'ConcertOne',
    fontSize: 30,
    marginBottom: 10,
  },
  resetButtonText: {
    fontFamily: 'ConcertOne',
    color: theme.resetColor,
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
}));
