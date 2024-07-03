import { useCuisineCategories } from '@app/queryHooks';
import { CuisineCategory } from '@app/screens/MainScreen/types.tsx';

type ParentId = number | null;

const useFilteredCuisineCategories = (parentId: ParentId = null) => {
  const {
    data: cuisineCategories,
    isError,
    isLoading,
    error,
  } = useCuisineCategories();

  console.log(
    '... cuisineCategories ',
    cuisineCategories,
    isError,
    isLoading,
    error,
  );

  return {
    data: cuisineCategories
      ?.filter((category: CuisineCategory) => category.parentId === parentId)
      .sort((a: CuisineCategory, b: CuisineCategory) =>
        a.position > b.position ? 1 : b.position > a.position ? -1 : 0,
      ),
    isLoading,
    isError,
  };
};

export default useFilteredCuisineCategories;
