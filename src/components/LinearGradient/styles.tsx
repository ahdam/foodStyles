import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    pointerEvents: 'none',
    height: '100%',
    top: 0,
    width: 18,
    right: 0,
  },
  left: {
    left: 0,
    transform: [{ rotate: '180deg' }],
  },
  right: {
    right: 0,
  },
});
