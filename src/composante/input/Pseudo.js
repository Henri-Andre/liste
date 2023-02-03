import React from 'react';

const Pseudo = ({handleProduit}) => {
    return (
        <div>
            <label>
                Pseudo

                <input type="text"  onChange={handleProduit} />
            </label>
    
        </div>
    );
};

export default Pseudo;