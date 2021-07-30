export const addproductToCart = (procuctObj) => ({
  type: 'ADD_PRODUCT_CART',
  payload: procuctObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
