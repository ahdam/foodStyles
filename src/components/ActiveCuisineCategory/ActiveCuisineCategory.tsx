import React, { useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles.tsx';
import { useAtomValue, useSetAtom } from 'jotai/index';
import { currentCuisineCategoryAtom } from '@app/atoms/selectedCuisineCategoryAtom.tsx';
import { ACTIVE_CUISINE_DEFAULTS } from '@app/configs';

import BackIcon from '@app/assets/svgs/arrow-left.svg';
import CloseIcon from '@app/assets/svgs/cross-mark.svg';

import {
  getDeepestChild,
  removeDeepestChild,
} from '../../utils/deepestChild.utils.tsx';

const ActiveCuisineCategory = (): React.JSX.Element => {
  const currentCuisineCategoryTree = useAtomValue(currentCuisineCategoryAtom);
  const setCurrentCuisineCategory = useSetAtom(currentCuisineCategoryAtom);

  const currentCuisineCategory = getDeepestChild(currentCuisineCategoryTree);

  const handleBackPress = useCallback(() => {
    const newCurrentCuisineCategoryTree = removeDeepestChild(
      currentCuisineCategoryTree,
    );

    setCurrentCuisineCategory(
      newCurrentCuisineCategoryTree
        ? { ...newCurrentCuisineCategoryTree }
        : null,
    );
  }, [currentCuisineCategoryTree]);

  const handleResetPress = useCallback(() => {
    setCurrentCuisineCategory(null);
  }, []);

  return (
    <View
      style={[styles.container, currentCuisineCategory ? styles.active : {}]}>
      <Image
        src={currentCuisineCategory?.imagePath}
        source={ACTIVE_CUISINE_DEFAULTS.image}
        style={styles.categoryIcon}
      />
      <View style={styles.content}>
        <Text style={styles.categoryName}>
          {currentCuisineCategory?.name || ACTIVE_CUISINE_DEFAULTS.name}
        </Text>
        {currentCuisineCategory && (
          <View style={styles.actionIconsContainer}>
            <TouchableOpacity onPress={handleBackPress}>
              <BackIcon width="14" height="14" color="rgb(67, 67, 67)" />
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity onPress={handleResetPress}>
              <CloseIcon width="14" height="14" color="rgb(67, 67, 67)" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default ActiveCuisineCategory;
