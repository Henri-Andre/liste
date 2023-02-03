import React from 'react';

const Number = ({handleQuantite}) => {
    
    return (
        <label>Quantité

            <input type="number" name="number" id="number" onChange={handleQuantite} />
        </label>
    );
};

export default Number;