import React from 'react';
import BaseLinearGradient from 'react-native-linear-gradient';

import { styles } from './styles.tsx';
import { LinearGradientsProps } from './types.tsx';

const LinearGradient = ({
  position = 'left',
}: LinearGradientsProps): React.JSX.Element => (
  <BaseLinearGradient
    style={[styles.linearGradient, styles[position]]}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 1 }}
    locations={[0, 1]}
    colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
  />
);

export default LinearGradient;
