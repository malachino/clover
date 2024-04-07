import React from 'react';
//import TopBar from './components/TopBar';
//import { useRef, useState} from 'react'


import cookie from './cookie.png'
import controller from './controller.png'
import headphones from './headphones.png'

import './App.css';

function App() {
  document.body.style.backgroundColor = "#303030"
  
  

  return (
    <>
      <body>

        <nav className='TopBar'>
            <ul>
                <li><b href=''>C L O V E R</b></li>

                <li><a href='https://honeysuckle-plum.vercel.app/'>Home</a></li>
                <li><a href='https://honeysuckle-plum.vercel.app/'>Extras</a></li>
                <li><a href='https://honeysuckle-plum.vercel.app/'>About</a></li>
                <li><a href='https://honeysuckle-plum.vercel.app/'>Contact</a></li>
                <li><a href='https://www.google.com/'>Leave to Google</a></li>
            </ul>
        </nav>

        <main>
            <h2>Hello!</h2>
            <p>
            My name is Malachi. I like making stuff, from music to games to cookies.          <br></br>
            Incidentally, I also like listening to music, playing games, and eating cookies.  
            </p>
            
            {/* <h1 className='text-x1 font-bold mt-4'>Which do you like the best?</h1>
             */}
            <img src={headphones} className='headphones' alt="" />  <t></t>
            <img src={cookie} className='cookie' alt="" />          <t></t>
            <img src={controller} className='controller' alt="" />
        </main>
            
            
        

      </body>
    </>
    
  );
}

export default App;