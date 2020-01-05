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
                    <ProductCategoryRow/>
                    <ProductRow/>

                    <ProductCategoryRow/>
                    <ProductRow/>
                    <ProductRow/>
                    <tr>
                        <td className="not-stocked">iPhone 5</td>
                        <td>$49.99</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;