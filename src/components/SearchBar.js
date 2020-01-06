import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.onInStockChange = this.onInStockChange.bind(this);
    }

    onSearchTextChange(evt) {
        this.props.onSearchTextChange(evt.target.value);
    }

    onInStockChange(evt) {
        this.props.onInStockChange(evt.target.checked);
    }

    render() {
        return (
            <div>
                <form id="search-bar" name="search-bar">
                    <p>
                    <input
                        type="text"
                        value={this.props.searchText}
                        onChange={this.onSearchTextChange}
                        placeholder="Search..."
                    /><br/>
                    <input
                        type="checkbox"
                        onChange={this.onInStockChange}
                    >{this.props.inStockOnly}</input> Only show products in stock
                    </p>
                </form>
            </div>
        );
    }
}

export default SearchBar;