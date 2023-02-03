import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './composante/Login';
import Contact from './composante/Contact';
import Inscription from './composante/Inscription';
import Upload from './composante/Upload';
import Commentaire from './composante/Commentaire';
import Json from './composante/Json';
import NewsLetter from './composante/NewsLetter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/inscription' element={<Inscription/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/newsletter' element={<NewsLetter/>}/>
        <Route path='/commentaire' element={<Commentaire/>}/>
        <Route path='/json' element={<Json/>}/>


      </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
