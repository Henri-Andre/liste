import React from 'react';
import Nav from './sous-composante/Nav';
import Name from './input/Name';
import Email from './input/Email';
import Password from './input/Password';
import Telephone from './input/Telephone';
import Submit from './input/Submit';

const Inscription = () => {
    return (
        <div>
              <header>
                <h1>Formulaire</h1>

                <Nav/>

            </header>

            <main>
                <h2>Inscription</h2>

                <section>

                    <form>
                        
                        <Name/>                        

                        <Email/>

                        <Password/>    

                        <Telephone/>

                        <Submit/>


                    </form>

                </section>
            </main>
        </div>
    );
};

export default Inscription;