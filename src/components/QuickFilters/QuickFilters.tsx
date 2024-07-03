import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { FILTER_BUTTONS_DATA } from '@app/configs';
import { styles } from './styles.tsx';
import { LinearGradient } from '@app/components';

const QuickFilters = (): React.JSX.Element => {
  return (
    <View>
      <ScrollView
        style={styles.filterButtonsList}
        contentContainerStyle={styles.filterButtonsListContentContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {FILTER_BUTTONS_DATA.map((text: string) => (
          <TouchableOpacity
            key={text}
            style={styles.filterButton}
            onPress={() => {}}>
            <Text style={styles.filterButtonText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <LinearGradient position="right" />
      <LinearGradient position="left" />
    </View>
  );
};

export default QuickFilters;
