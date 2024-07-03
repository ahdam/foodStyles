import {
  addChildToDeepestNode,
  getDeepestChild,
  removeDeepestChild,
} from '@app/utils/deepestChild.utils.tsx';
import {
  CurrentCuisineCategory,
  CurrentCuisineCategoryTree,
} from '@app/atoms/selectedCuisineCategoryAtom.tsx';

import testTreeData from '@app/utils/__stubs__/deepestChildTestData.tsx';

describe('Test deepestChild', () => {
  it('Test getDeepestChild', () => {
    expect(
      getDeepestChild(testTreeData as unknown as CurrentCuisineCategoryTree),
    ).toEqual({ name: 3 });
  });

  it('Test getDeepestChild', () => {
    expect(
      removeDeepestChild(testTreeData as unknown as CurrentCuisineCategoryTree),
    ).toEqual({
      name: 1,
      child: { name: 2 },
    });
  });

  it('Test addChildToDeepestNode', () => {
    expect(
      addChildToDeepestNode(
        {
          name: 1,
          child: { name: 2 },
        } as unknown as CurrentCuisineCategoryTree,
        { name: 3 } as unknown as CurrentCuisineCategory,
      ),
    ).toEqual({
      name: 1,
      child: { name: 2, child: { name: 3 } },
    });
  });
});
