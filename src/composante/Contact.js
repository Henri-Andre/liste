import React from 'react';
import Nav from './sous-composante/Nav';
import Telephone from './input/Telephone';
import Email from './input/Email';
import Name from './input/Name';
import Texte from './input/Texte';
import Submit from './input/Submit';
const Contact = () => {
    return (
        <div>
              <header>
                <h1>Formulaire</h1>

                <Nav/>

            </header>

            <main>
                <h2>Contact</h2>

                <section>

                    <form>
                        
                        <Telephone/>

                        <Email/>

                        <Name/>

                        <Texte/>

                        <Submit/>


                    </form>



                </section>
                    
            </main>
        </div>
    );
};

export default Contact;