import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  content: {
    marginHorizontal: 18,
    backgroundColor: 'white',
    borderRadius: 9,
    shadowColor: 'rgba(176, 176, 176)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 7,
    shadowOpacity: 0.4,
    elevation: 5,
  },
  activeCuisineCategoryPosition: {
    marginTop: 20,
    marginLeft: 17,
    marginRight: 24,
  },
  filterButtonsListPosition: {
    marginTop: 11,
  },
  cuisineCategoriesListPosition: {
    marginTop: 15,
  },
});
