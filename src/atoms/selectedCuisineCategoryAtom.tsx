import { atom } from 'jotai';

export type CurrentCuisineCategory = {
  id: number;
  name: string;
  imagePath: string;
};

export type CurrentCuisineCategoryTree = {
  id: number;
  name: string;
  imagePath: string;
  child?: CurrentCuisineCategory;
} | null;

export const currentCuisineCategoryAtom =
  atom<CurrentCuisineCategoryTree | null>(null);
