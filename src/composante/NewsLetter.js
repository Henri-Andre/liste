import React from 'react';
import Nav from './sous-composante/Nav';
import Email from './input/Email';
import Submit from './input/Submit';

const NewsLetter = () => {
    return (
        <div>
              <header>
                <h1>Formulaire</h1>

                <Nav/>

            </header>

            <main>
                <h2>Newsletter</h2>

                <section>

                        <form>
                            
                           <Email/>

                           <Submit/>


                        </form>



                </section>
            </main>
        </div>
    );
};

export default NewsLetter;