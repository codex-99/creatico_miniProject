import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Shop from './Shop';
import SellerSignUp from './SellerSignup';
import SignOut from './SignOut';
import SellerSignIn from './SellerSignin';
import SellerProfile from './SellerProfile';
import SellerInfo from './SellerInfo';
import Listing from './Listing';
import ListingForm from './ListingForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
  return(
    <Router>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/seller/signup" component={SellerSignUp}/>
      <Route path="/seller/signout" component={SignOut}/>
      <Route path="/seller/profile" component={SellerProfile}/>
      <Route path="/seller/signin" component={SellerSignIn}/>
      <Route path="/seller/basicInfo" component={SellerInfo}/>
      <Route path="/seller/listings" component={Listing}/>
      <Route path="/seller/listingForm" component={ListingForm}/>
      </Switch>
    </Router>
  )
}

export default App;