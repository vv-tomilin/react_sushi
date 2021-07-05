import React from 'react';

import rollFudzi from '../../assets/images/roll_fudzi.jpg';

function RollSushiBlock() {
  return (
    <div>
      <img src={rollFudzi} />
      <h3>Ролл Фудзи</h3>
      <div>
        <p>
              Лосось копченый, рис, свежий огурец, <br/>
              соус “лава”, зеленый лук, омлет, кунж...
        </p>
        <span>230 г.</span>
      </div>
      <div>
        <p>159 ₽</p>
        <button>Состав</button>
        <button>В корзину</button>
      </div>
    </div>
  );
}

export default RollSushiBlock;
