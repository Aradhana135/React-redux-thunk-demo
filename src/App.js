import React from 'react';
import {BrowserRouter as Router,Link, Route,Routes,Switch} from 'react-router-dom'
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Products';
function App() {
  return (
     <Router>
        <div className="container">
            <Header />
            <Routes>
               <Route path="/" exact component={Product} />
               <Route path="/carts" exact component={Cart} />
            </Routes>
        </div>
     </Router>
  );
}

export default App;
