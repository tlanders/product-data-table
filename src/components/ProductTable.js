import React, {Component} from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
    render() {
        return (
            <div id="product-table">
                <table>
                    <thead>
                    <th>Name</th>
                    <th>Price</th>
                    </thead>
                    <tbody>
                    <ProductCategoryRow title="Sporting Goods"/>
                    <ProductRow productName="Football" price="49.99" stocked={true}/>

                    <ProductCategoryRow title="Electronics"/>
                    <ProductRow productName="iPod Touch" price="29.99" stocked={true}/>
                    <ProductRow productName="iPhone 5" price="349.99" stocked={false}/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;