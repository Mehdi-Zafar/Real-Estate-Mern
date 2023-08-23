import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 

import AddProperty from './Components/addProperty';
import Head from './Components/head';
import home from './Components/home';
import Foot from './Components/foot';
import SignIn from './Components/signin';
import SignUp from './Components/signup';
import propertydetail from './Components/propertydetail';
import Searchbar from './Components/searchbar';
import PropertyRent from './Components/proprent';
import PropertySale from './Components/propsale';

 

function App() {

  return (

    <div className="wrapper">

      <Router>
        <Head/>
        <Switch>
        


          { <Route exact path="/" component={home} /> }
          { <Route exact path="/addproperty" component={AddProperty} /> }
          { <Route exact path="/signin" component={SignIn} /> }
          { <Route exact path="/signup" component={SignUp} /> }
          { <Route exact path="/proprent" component={PropertyRent} /> }
          { <Route exact path="/propsale" component={PropertySale} /> }
          { <Route exact path="/propertydetail" component={propertydetail} /> }
          { <Route exact path="/searchbar" component={Searchbar} /> }

        </Switch>
        <Foot/>

      </Router>

    </div>

  );

}

export default App;