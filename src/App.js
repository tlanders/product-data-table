import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form id="search" name="search">
        <input type="text" value="" name="searchText"/><br/>
          <input type="checkbox" name="inStockOnly"/> Only show products in stock
      </form>
        <div id="product-table">
        <table>
            <thead>
            <th>Name</th>
            <th>Price</th>
            </thead>
            <tbody>
                <tr>
                    <td><b>Sporting Goods</b></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Football</td>
                    <td>$49.99</td>
                </tr>
                <tr>
                    <td><b>Electronics</b></td>
                    <td></td>
                </tr>
                <tr>
                    <td>iPod Touch</td>
                    <td>$9.99</td>
                </tr>
                <tr>
                    <td class="not-stocked">iPhone 5</td>
                    <td>$49.99</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  );
}

export default App;
