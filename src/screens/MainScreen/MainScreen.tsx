import React from 'react';
import { SafeAreaView } from 'react-native';

import MainContainer from './MainContainer.tsx';
import { styles } from './styles.tsx';

const MainScreen = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <MainContainer />
    </SafeAreaView>
  );
};

export default MainScreen;
