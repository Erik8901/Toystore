import React, { Component } from 'react';
//import Template from './template.js';

import ProductsInStore from './ProductsInStore.js'
import AdminLogin from './adminLogin.js'




import './App.css';


class App extends Component {
  render() {
    return (
      <div>

        <ProductsInStore />
        <AdminLogin  />



      </div>

    );
  }

  componentDidUpdate(){
  }
}
// <Template/>
export default App;
