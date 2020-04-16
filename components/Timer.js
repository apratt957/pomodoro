import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

export default function Timer({ time }) {
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

const colors = {
  red: '#E83C3C',
  blue: '#0B2033',
  yellow: '#FFE882',
  pink: '#FFE8E8',
  orange: '#FA8334',
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  time: {
    color: colors.pink,
    fontSize: 100,
    fontFamily: 'ConcertOne',
  },
});
