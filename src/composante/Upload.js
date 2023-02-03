import React from 'react';
import Nav from './sous-composante/Nav';
import File from './input/File';
import Name from './input/Name';
import Texte from './input/Texte';
import Submit from './input/Submit';

const Upload = () => {
    return (
        <div>
              <header>
                <h1>Formulaire</h1>

                <Nav/>

            </header>

            <main>
                <h2>Upload</h2>

                <section>

                        <form>
                            
                           <File/>

                           <Name/>

                           <Texte/>

                           <Submit/>


                        </form>



                </section>

            </main>
        </div>
    );
};

export default Upload;