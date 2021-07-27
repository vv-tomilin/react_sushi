import React from 'react';
import {Route} from 'react-router';

import {Header, Footer} from './components';
import {
  Home,
  Cart,
  PromosInfoPage,
  BonusesPage,
  DeliveryInfoPage,
  AboutWebSitePage,
  PublicOfferPage,
  PrivacyPolicyPage,
  OurRestaurantsPage,
  JobOpeningsPage,
} from './pages';

function App() {
  return (
    <div className='app'>
      <Header/>
      <div>
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
        <Route path='/promos-info-page' component={PromosInfoPage} exact />
        <Route path='/bonuses-page' component={BonusesPage} exact />
        <Route path='/delivery-info-page' component={DeliveryInfoPage} exact />
        <Route path='/about-web-site-page' component={AboutWebSitePage} exact />
        <Route path='/public-offer-page' component={PublicOfferPage} exact />
        <Route path='/privacy-policy-page' component={PrivacyPolicyPage} exact/>
        <Route
          path='/our-restaurants-page'
          component={OurRestaurantsPage} exact/>
        <Route path='/job-openings-page' component={JobOpeningsPage} exact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
