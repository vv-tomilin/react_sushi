import React from 'react';
import {Link} from 'react-router-dom';

import CartItem from '../components/CartItem';

import {useSelector, useDispatch} from 'react-redux';
import {
  clearCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from '../redux/actions/cart';

import cartEmptyImage from '../assets/images/cart_empty.png';

function Cart() {
  const dispatch = useDispatch();
  const {totalCount, totalPrice, items} = useSelector(({cart}) => cart);

  const addedProducts = Object.keys(items)
      .map((key) => {
        return items[key].items[0];
      });

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusCartItem = (id) => {
    dispatch(minusCartItem(id));
  };

  return (
    <div className='cart' >
      {totalCount !== 0 ? (
      <div className='cart__list-wrapper'>
        <div className='cart__title-wrapper'>
          <p className='cart__title'>Корзина</p>
          <button
            className='cart__clear-button'
            onClick={onClearCart} >
            Очистить корзину
          </button>
        </div>
        <ul className='cart__list'>
          {
            addedProducts && addedProducts.map((obj) => (
              <CartItem
                key={obj.id}
                id={obj.id}
                imageURL={obj.imageURL}
                name={obj.name}
                weight={obj.weight}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusCartItem}
                onPlus={onPlusItem} />
            ))
          }
        </ul>

        <div className='cart__order-btns-wrapper'>
          <p className='cart__total-price-title'>
            Итого: <span>{totalPrice} ₽</span>
          </p>
          <button className='cart__place-order-btn'>
            Оформить заказ
          </button>
          <Link to='/'>
            <button className='cart__empty-btn-back'>
                Продолжить покупки
            </button>
          </Link>
        </div>
      </div>) :
      (
        <div className='cart__empty-wrapper'>
          <div className='cart__empty'>
            <p className='cart__empty-title'>Ваша корзина пуста...</p>
            <img className='cart__empty-img' src={cartEmptyImage} alt="" />
            <p className='cart__empty-text'>
              Скорее всего вы еще не выбрали ни одного блюда
              пожалуйста вернитесь на главную страницу и выберите
              для себя блюдо из нашего меню.
            </p>
            <Link to='/'>
              <button className='cart__empty-btn-back'>
                Вернуться на главную
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
