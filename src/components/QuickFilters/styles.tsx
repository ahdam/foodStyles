import { StyleSheet } from 'react-native';
import { FONT_PROXIMA } from '@app/configs';

export const styles = StyleSheet.create({
  filterButtonsList: {
    display: 'flex',
    flexDirection: 'row',
  },
  filterButtonsListContentContainer: {
    paddingLeft: 17,
    paddingRight: 24,
    gap: 8,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 7,
    backgroundColor: 'rgb(236, 236, 236)',
    borderRadius: 5,
  },
  filterButtonText: {
    fontFamily: FONT_PROXIMA.bold,
    color: 'rgb(136, 136, 136)',
    textTransform: 'uppercase',
    fontSize: 11.5,
    lineHeight: 15,
    letterSpacing: 0.5,
  },
  linearGradient: {
    position: 'absolute',
    pointerEvents: 'none',
    right: 0,
    height: '100%',
    top: 0,
    width: 18,
  },
});
