import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
    render() {
        return (
            <div id="filterable-table">
                <SearchBar/>
                <ProductTable/>
            </div>
        );
    }
}

export default FilterableProductTable;