import React from 'react';
import Nav from './sous-composante/Nav';
import Name from './input/Name';
import Texte from './input/Texte';
import Submit from './input/Submit';

const Commentaire = () => {
    return (
        <div>
              <header>
                <h1>Formulaire</h1>

                <Nav/>

            </header>

            <main>
                <h2>Commentaire</h2>

                <section>

                        <form>
                            
                            <Name/>

                            <Texte/>

                            <Submit/>


                        </form>



                </section>
            </main>
        </div>
    );
};

export default Commentaire;