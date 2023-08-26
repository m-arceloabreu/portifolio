'use client';
import React, {useState, useEffect} from "react";
import './layout.css'
import Image from "next/image";
import imageBg from 'public/purple-black-background.jpg';
import { About } from "./about/About";

export default function Layout({ children }) {

  const [active, setActive] = useState('');

  const handleActive = event => {
    if(active != 'active'){
    setActive('active');
    }else{
      setActive('');
    }
  }

   

  useEffect(() => {
    window.addEventListener('scroll',function(){
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
    });

  })

  return (
    <div>
        <header>
            <div className="line-breaker"></div>
            <a className="logo font-museo">m.Abreu</a>
            <Image
                className="banner"
                src={imageBg}
                alt="Purple smoke"
              />
              <div
                onClick={handleActive}
                className={`toggle ${active}`}></div>
          <nav className={`${active}`}>
            <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Skills</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </header>
        <div id='body' className="text-[10] mt-[20vh]">
          <About/>
          <p>A</p>
          <p>A</p>
          <p>A</p>
        </div>
        {children}
    </div>
  );
}