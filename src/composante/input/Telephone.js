import React from 'react';

const Telephone = () => {
    return (
        <label>
            Téléphone
            <input type="tel" id="phone" name="phone"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required/>

        </label>
    );
};

export default Telephone;