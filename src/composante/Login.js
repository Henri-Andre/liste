import React, { useState } from 'react';
import Nav from './sous-composante/Nav';
import Email from './input/Email';
import Password from './input/Password';
import Submit from './input/Submit';




const login = () => {
    
   const [messageError, setMessageError]= useState('pas de message')

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(!email){
            alert('Email invalide')
        };

        if(password.match(/^(?=.*?[A-Z])(?=.*?[a-z])?=.*?[0-9]?=.*?[!@#\$%\^\&*\)\(+=._-]/)){
            alert('Password invalide')
            setMessageError('le mpd ne respect pascles conditions')
        }

        console.log(email,password)

    };



    return (
        <div>
            <header>
                <h1>Formulaire</h1>

                <Nav/>

            </header>

            <main>
                <h2>Login</h2>


                <section>
                    
                    <form className='login' onSubmit={handleSubmit}>

                        <Email/>
                        {messageError}
                        <Password/>
                            
                        <Submit/>  

                    </form>

                </section>
            </main>
        </div>
    );
};

export default login;