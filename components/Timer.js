import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import { styleSheetFactory } from '../hooks/themes';
import { useTheme } from 'react-native-themed-styles';

export default function Timer({ time, theme }) {
  const [styles] = useTheme(themedStyles, theme);

  return (
    <View style={styles.container}>
      {time < 600000 ? (
        <Text style={styles.time}>
          {moment
            .utc(moment.duration(time, 'ms').asMilliseconds())
            .format('m:ss')}
        </Text>
      ) : (
        <Text style={styles.time}>
          {moment
            .utc(moment.duration(time, 'ms').asMilliseconds())
            .format('mm:ss')}
        </Text>
      )}
    </View>
  );
}

const themedStyles = styleSheetFactory((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  time: {
    color: theme.textColor,
    fontSize: 100,
    fontFamily: 'ConcertOne',
  },
}));
