import { StyleSheet } from 'react-native';
import { FONT_PROXIMA } from '@app/configs';

export const styles = StyleSheet.create({
  categoryListContainer: {
    paddingBottom: 7,
    marginBottom: 18,
  },
  cuisineCategoriesListContentContainer: {
    paddingLeft: 17,
    paddingRight: 24,
    gap: 10,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 128,
  },
  categoryItemExtraMargin: {
    marginBottom: 11,
  },
  categoryImage: {
    width: 40,
    height: 40,
  },
  categoryName: {
    fontFamily: FONT_PROXIMA.semibold,
    color: 'rgb(67, 67, 67)',
    fontSize: 13,
    lineHeight: 14,
    marginLeft: 8,
    flex: 1,
    flexWrap: 'wrap',
  },
  linearGradient: {
    position: 'absolute',
    pointerEvents: 'none',
    right: 0,
    height: '100%',
    top: 0,
    width: 20,
  },
});
