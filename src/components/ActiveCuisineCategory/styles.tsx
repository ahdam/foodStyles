import { StyleSheet } from 'react-native';
import { FONT_PROXIMA } from '@app/configs';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(237, 237, 237)',
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  active: { backgroundColor: 'rgb(255, 236, 201)' },
  categoryIcon: {
    width: 33,
    height: 33,
  },
  content: {
    flex: 1,
    marginLeft: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryName: {
    fontFamily: FONT_PROXIMA.bold,
    color: 'rgb(67,67,67)',
    fontSize: 15,
    lineHeight: 18,
  },
  actionIconsContainer: {
    flexDirection: 'row',
    marginRight: 12.5,
    alignItems: 'center',
  },
  divider: {
    width: 0,
    height: '100%',
    borderRightWidth: 1,
    borderColor: 'rgb(241, 211, 155)',
    marginHorizontal: 12.5,
  },
});
