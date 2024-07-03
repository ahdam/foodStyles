import { CuisineCategory } from '@app/screens/MainScreen/types.tsx';
import {
  CurrentCuisineCategory,
  CurrentCuisineCategoryTree,
} from '@app/atoms/selectedCuisineCategoryAtom.tsx';

export interface CuisineCategoriesListProps {
  cuisineCategories: CuisineCategory[];
  currentCuisineCategory: CurrentCuisineCategory;
  setCurrentCuisineCategory: (
    cuisineCategoryTree: CurrentCuisineCategoryTree,
  ) => void;
}

export interface CuisineCategoriesListItemProps {
  index: number;
  category: CuisineCategory;
  currentCuisineCategory: CurrentCuisineCategory;
  setCurrentCuisineCategory: (
    cuisineCategoryTree: CurrentCuisineCategoryTree,
  ) => void;
}
