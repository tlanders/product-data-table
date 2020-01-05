import React from 'react';

const ProductCategoryRow = (props) => {
    return (
        <tr>
            <th colSpan="2"><b>{props.title}</b></th>
        </tr>
    );
};

export default ProductCategoryRow;