import React from 'react';
import { handleChange } from '../function/OnSubmit';

const Email = () => {
    return (
        <label>
            Email
            <input type="email" name="email" id="mail" />
        </label>
    );
};

export default Email;