import React from 'react';

const Select = ({props}) => {
    return (
            <option value= {props.produit}>{props.produit}</option>

    );
};

export default Select;