import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import {ProductIngridientsPopup} from '../Modals';

import {iSymbol, cartIconWhite} from '../../assets/logo and icons';

function ProductBlock({
  id,
  name,
  imageURL,
  price,
  quantity,
  ingridients,
  weight,
  energyValue,
  proteins,
  fats,
  carbohydrates,
  onClickAddToCart,
  addedCount,
}) {
  const [visualPopup, setVisualPopup] = React.useState(false);

  const popupRef = React.useRef();
  const buttonPopupRef = React.useRef();

  const handleOutsideClick = (e) => {
    if (!e.path.includes(popupRef.current) &&
        !e.path.includes(buttonPopupRef.current)) {
      setVisualPopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const togglePopup = () => {
    setVisualPopup(!visualPopup);
  };

  const onAddProduct = () => {
    const obj = {
      id,
      name,
      imageURL,
      price,
      ingridients,
      weight,
    };

    onClickAddToCart(obj);
  };

  return (
    <div className='product-block__wrapper'>
      <div className='product-block'>
        <img
          className='product-block__img' src={imageURL}
          width='300' height='170' />
        <p className='product-block__title'>{name}</p>
        <p className='product-block__title'>{`${quantity} шт.`}</p>
        <div className='product-block__short-description'>
          <p>
            {ingridients.length > 48 ?
            `${ingridients.slice(0, 48)} . . .` :
            `${ingridients}`}
          </p>
          <span>{weight} г.</span>
        </div>
        <div className='product-block__price-addcart'>
          <p className='product-block__price'>
            {price}₽
          </p>
          {visualPopup &&
            <ProductIngridientsPopup
              popupRef={popupRef}
              ingridients={ingridients}
              weight={weight}
              energyValue={energyValue}
              proteins={proteins}
              fats={fats}
              carbohydrates={carbohydrates} />
          }
          <Button
            className='button_ingridients-info'
            onClick={togglePopup}
            buttonPopupRef={buttonPopupRef} >
            <img src={iSymbol} alt=''/>
          </Button>
          <Button
            className='button_add'
            onClick={onAddProduct} >
            <span>Хочу</span>
            <img src={cartIconWhite}/>
            {
              addedCount &&
                <p className='product-block__added-count'>
                  <i>{addedCount}</i>
                </p>
            }
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductBlock;

ProductBlock.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  ingridients: PropTypes.string,
  weight: PropTypes.number,
  energyValue: PropTypes.number,
  proteins: PropTypes.number,
  fats: PropTypes.number,
  carbohydrates: PropTypes.number,
  onClickAddToCart: PropTypes.func,
  addedCount: PropTypes.number,
};
