import React, { useState } from 'react';

const Texte = ({handleComment}) => {

    return (
        <label>
            Texte
            <input type="text" onChange={handleComment} />
        </label>
    );
};
export default Texte;