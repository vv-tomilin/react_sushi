export const addproductToCart = (procuctObj) => ({
  type: 'ADD_PRODUCT_CART',
  payload: procuctObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});
