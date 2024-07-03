import React from 'react';
import { FlatList, View } from 'react-native';
import _ from 'lodash';

import { styles } from './styles.tsx';
import { LinearGradient } from '@app/components';
import { CuisineCategory } from '@app/screens/MainScreen/types.tsx';
import { CuisineCategoriesListProps } from '@app/components/CuisineCategoriesList/types.tsx';
import CuisineCategoriesListItem from './CuisineCategoriesListItem.tsx';

const CuisineCategoriesList = ({
  cuisineCategories,
  currentCuisineCategory,
  setCurrentCuisineCategory,
}: CuisineCategoriesListProps): React.JSX.Element => {
  return (
    <View style={styles.categoryListContainer}>
      <FlatList
        horizontal
        data={
          _.chunk(
            cuisineCategories,
            cuisineCategories?.length > 2 ? 2 : 1,
          ) as CuisineCategory[][]
        }
        contentContainerStyle={styles.cuisineCategoriesListContentContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: { item: CuisineCategory[] }) => (
          <View>
            {item.map((category: CuisineCategory, index: number) => (
              <CuisineCategoriesListItem
                index={index}
                key={category.position}
                category={category}
                currentCuisineCategory={currentCuisineCategory}
                setCurrentCuisineCategory={setCurrentCuisineCategory}
              />
            ))}
          </View>
        )}
      />
      <LinearGradient position="right" />
      <LinearGradient position="left" />
    </View>
  );
};

export default CuisineCategoriesList;
