import { useQuery } from '@tanstack/react-query';

import { BASE_URL } from '@app/configs';

// Hook for fetching cuisine categories from API
const useCuisineCategories = () =>
  useQuery({
    queryKey: ['cuisine-categories'],
    queryFn: () => getCuisineCategories(),
  });

const getCuisineCategories = async () => {
  const reply = await fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log('.... GET', reply);

  return reply.json();
};

export default useCuisineCategories;
