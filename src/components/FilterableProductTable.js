import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
    render() {
        return (
            <div id="filterable-table">
                <SearchBar/>
                <ProductTable products={this.props.products}/>
            </div>
        );
    }
}

export default FilterableProductTable;