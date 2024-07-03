import React from 'react';
import { View } from 'react-native';

import { styles } from './styles.tsx';
import { useSetAtom } from 'jotai/index';

import {
  ActiveCuisineCategory,
  CuisineCategoriesList,
  QuickFilters,
} from '@app/components';
import {
  useCurrentCuisineCategory,
  useFilteredCuisineCategories,
} from '@app/hooks';
import {
  CurrentCuisineCategory,
  currentCuisineCategoryAtom,
} from '@app/atoms/selectedCuisineCategoryAtom.tsx';

const CuisineCategoryCard = (): React.JSX.Element => {
  const currentCuisineCategory = useCurrentCuisineCategory();
  const setCurrentCuisineCategory = useSetAtom(currentCuisineCategoryAtom);

  const { data: cuisineCategories } = useFilteredCuisineCategories(
    currentCuisineCategory?.id,
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.activeCuisineCategoryPosition}>
          <ActiveCuisineCategory />
        </View>
        <View style={styles.filterButtonsListPosition}>
          <QuickFilters />
        </View>
        <View style={styles.cuisineCategoriesListPosition}>
          <CuisineCategoriesList
            cuisineCategories={cuisineCategories}
            currentCuisineCategory={
              currentCuisineCategory as CurrentCuisineCategory
            }
            setCurrentCuisineCategory={setCurrentCuisineCategory}
          />
        </View>
      </View>
    </View>
  );
};

export default CuisineCategoryCard;
