import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
               <nav>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Login</NavLink>
                        </li>

                        <li>
                            <NavLink to={'/contact'}>Contact</NavLink>
                        </li>

                        <li>
                            <NavLink to={'/inscription'}>Inscription</NavLink>
                        </li>

                        <li>
                            <NavLink to={'/upload'}>Upload</NavLink>
                        </li>

                        <li>
                            <NavLink to={'/newsletter'}>Newsletter</NavLink>
                        </li>

                        <li>
                            <NavLink to={'/commentaire'}>Commentaire</NavLink>
                        </li>
                    </ul>
         </nav>
        </div>
    );
};

export default Nav;