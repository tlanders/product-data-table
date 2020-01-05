import React from 'react';

const ProductRow = (props) => {
    return (
        <tr>
            <td class={props.stocked ? 'stocked' : 'not-stocked'}>{props.productName}</td>
            <td>${props.price}</td>
        </tr>
    );
};

export default ProductRow;