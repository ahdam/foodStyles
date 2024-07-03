import { useAtomValue } from 'jotai/index';
import { currentCuisineCategoryAtom } from '../atoms/selectedCuisineCategoryAtom.tsx';
import { getDeepestChild } from '../utils/deepestChild.utils.tsx';

const useCurrentCuisineCategory = () => {
  const currentCuisineCategoryTree = useAtomValue(currentCuisineCategoryAtom);
  return getDeepestChild(currentCuisineCategoryTree);
};

export default useCurrentCuisineCategory;
