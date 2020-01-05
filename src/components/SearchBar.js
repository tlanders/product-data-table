import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <form id="search-bar" name="search-bar">
                    <input type="text" value="" name="searchText"/><br/>
                    <input type="checkbox" name="inStockOnly"/> Only show products in stock
                </form>
            </div>
        );
    }
}

export default SearchBar;