'use client';
import React, {useState, useEffect} from "react";
import './layout.css'
import Image from "next/image";
import imageBg from 'public/purple-black-background.jpg';
export default function Layout({ children }) {

  const [sticky, setSticky] = useState();

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
          <nav>
            <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Skills</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </header>
        <div className="text-[800px]">
          <p>A</p>
          <p>A</p>
          <p>A</p>
        </div>
        {children}
    </div>
  );
}