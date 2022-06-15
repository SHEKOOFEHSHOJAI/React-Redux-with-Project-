import React from "react";
import "./App.css";
import Header from "./redux/continers/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Routes,
} from "react-router-dom";

import ProductListing from "./redux/continers/ProductListing";
import ProductDetail from "./redux/continers/ProductDetail";
function App() {
   return (
     <div className="App">
       <Router>
         <Header />
         <Switch>
           <Route path="/" exact component={ProductListing}  />
           <Route path="/product/:productId" component={ProductDetail} />
           <Route>404 Not Found!</Route>
         </Switch>
       </Router>
     </div>
   );
}

export default App;
