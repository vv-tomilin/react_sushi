export const setSortBY = (({type, order}) => ({
  type: 'SET_SORT_BY',
  payload: {type, order},
}));
