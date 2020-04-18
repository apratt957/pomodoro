import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styleSheetFactory } from '../hooks/themes';
import { useTheme } from 'react-native-themed-styles';

export default function TimeAdjusters({
  sessionVal,
  breakVal,
  incrementSessionTime,
  decrementSessionTime,
  incrementBreakTime,
  decrementBreakTime,
  stopTimer,
  theme,
}) {
  const [styles] = useTheme(themedStyles, theme);

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <Text style={styles.controlText}>Work</Text>
        <TouchableOpacity
          onPressIn={() => incrementSessionTime()}
          onPressOut={() => stopTimer()}
        >
          <View>
            <Text style={styles.controlArrows}>&#8593;</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.controlText}>{sessionVal}</Text>
        <TouchableOpacity
          onPressIn={() => decrementSessionTime()}
          onPressOut={() => stopTimer()}
        >
          <View>
            <Text style={styles.controlArrows}>&#8595;</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.controls}>
        <Text style={styles.controlText}>Break</Text>
        <TouchableOpacity
          onPressIn={() => incrementBreakTime()}
          onPressOut={() => stopTimer()}
        >
          <View>
            <Text style={styles.controlArrows}>&#8593;</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.controlText}>{breakVal}</Text>
        <TouchableOpacity
          onPressIn={() => decrementBreakTime()}
          onPressOut={() => stopTimer()}
        >
          <View>
            <Text style={styles.controlArrows}>&#8595;</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const themedStyles = styleSheetFactory((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 60,
    marginTop: 30,
  },
  controls: {
    alignItems: 'center',
  },
  controlText: {
    color: theme.textColor,
    fontSize: 30,
    fontFamily: 'ConcertOne',
  },
  controlArrows: {
    color: theme.textColor,
    fontSize: 40,
  },
  image: {
    height: 270,
    width: 190,
  },
}));
