import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <form id="search-bar" name="search-bar">
                    <p>
                    <input type="text" value="" name="searchText" placeholder="Search..."/><br/>
                    <input type="checkbox" name="inStockOnly"/> Only show products in stock
                    </p>
                </form>
            </div>
        );
    }
}

export default SearchBar;