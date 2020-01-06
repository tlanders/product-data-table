import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
        this.state = {
            inStockOnly: false,
            searchText: ''
        };
    }

    handleSearchTextChange(text) {
        this.setState({
            searchText: text
        });
    }

    handleInStockChange(inStock) {
        this.setState({
            inStockOnly: inStock
        });
    }

    render() {
        return (
            <div id="filterable-table">
                <SearchBar
                    onSearchTextChange={this.handleSearchTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.searchText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

export default FilterableProductTable;