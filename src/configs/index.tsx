import { Platform } from 'react-native';

export const BASE_URL =
  Platform.OS === 'ios' ? 'http://localhost:3000/' : 'http://10.0.2.2:3000/';
export const FILTER_BUTTONS_DATA = [
  'Anytime',
  'Any price',
  'Any rating',
  'Top Rated',
  'Nice Place',
];
export const ACTIVE_CUISINE_DEFAULTS = {
  name: 'Cuisines',
  image: require('../../assets/images/browse-cuisines/browse-cuisines.png'),
};
export const FONT_PROXIMA = {
  regular:
    Platform.OS === 'ios' ? 'Proxima Nova A Regular' : 'ProximaNovaAlt-Regular',
  bold: Platform.OS === 'ios' ? 'Proxima Nova A Bold' : 'ProximaNovaAlt-Bold',
  semibold:
    Platform.OS === 'ios'
      ? 'Proxima Nova A Semibold'
      : 'ProximaNovaAlt-Semibold',
};
