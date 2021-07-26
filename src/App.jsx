import React from 'react';
import {Route} from 'react-router';

import {Header, Footer} from './components';
import {Home, Cart} from './pages';

function App() {
  return (
    <div className='app'>
      <Header/>
      <div>
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
