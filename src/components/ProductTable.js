import React, {Component} from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
    render() {
        const rows = [];
        let category = null;
        this.props.products.forEach((product) => {
            if(category == null || product.category !== category) {
                category = product.category;
                rows.push(
                    <ProductCategoryRow title={category}/>
                );
            }

            rows.push(
                <ProductRow productName={product.name} price={product.price} stocked={product.stocked}/>
            )
        });

        return (
            <div id="product-table">
                <table>
                    <thead>
                    <th>Name</th>
                    <th>Price</th>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;