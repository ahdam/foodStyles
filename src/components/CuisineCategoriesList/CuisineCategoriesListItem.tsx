import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { addChildToDeepestNode } from '@app/utils/deepestChild.utils.tsx';
import { CuisineCategoriesListItemProps } from '@app/components/CuisineCategoriesList/types.tsx';
import { CurrentCuisineCategoryTree } from '@app/atoms/selectedCuisineCategoryAtom.tsx';
import { styles } from './styles.tsx';

const CuisineCategoriesListItem = ({
  index,
  category,
  currentCuisineCategory,
  setCurrentCuisineCategory,
}: CuisineCategoriesListItemProps): React.JSX.Element => {
  return (
    <TouchableOpacity
      key={category.position}
      onPress={() => {
        const newCurrentCuisineCategoryTree = addChildToDeepestNode(
          currentCuisineCategory,
          {
            id: category.id,
            imagePath: category.imagePath,
            name: category.name,
          },
        );
        setCurrentCuisineCategory({
          ...newCurrentCuisineCategoryTree,
        } as CurrentCuisineCategoryTree);
      }}
      style={[
        styles.categoryItem,
        index === 0 ? styles.categoryItemExtraMargin : {},
      ]}>
      <Image
        source={{ uri: category.imagePath }}
        style={styles.categoryImage}
      />
      <Text style={styles.categoryName}>{category.name}</Text>
    </TouchableOpacity>
  );
};

export default CuisineCategoriesListItem;
