import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

export default function App() {
  const [time, setTime] = useState(moment.duration(25, 'm'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime.clone().subtract(moment.duration(1, 's')));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        {time.minutes()}:{time.seconds()}
      </Text>
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
