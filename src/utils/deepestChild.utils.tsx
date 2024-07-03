import {
  CurrentCuisineCategory,
  CurrentCuisineCategoryTree,
} from '../atoms/selectedCuisineCategoryAtom.tsx';

export const getDeepestChild = (
  tree: CurrentCuisineCategoryTree | null,
): CurrentCuisineCategory | null => {
  let current = tree;

  if (current) {
    while (current.child) {
      current = current.child;
    }
  }

  return current;
};

export const removeDeepestChild = (
  tree: CurrentCuisineCategoryTree,
): CurrentCuisineCategoryTree | null => {
  if (!tree || !tree.child) {
    return null; // If there's no child, return null
  }

  let current = tree;
  let parent = null;

  while (current.child) {
    parent = current;
    current = current.child;
  }

  if (parent) {
    delete parent.child;
  }

  return tree;
};

export const addChildToDeepestNode = (
  tree: CurrentCuisineCategoryTree | null,
  newChild: CurrentCuisineCategory,
): CurrentCuisineCategoryTree => {
  if (!tree) return newChild;
  let current = tree;

  while (current.child) {
    current = current.child;
  }

  current.child = newChild;

  return tree;
};
