'use client';

export default function Navbar(){
    const showButton = () => {
        if(window.innerHeight <=960){
          setButton(false);
        }else{
          setButton(true);
        }
      }
    
      window.addEventListener('scroll', showButton);
    return(
        <header>
            <nav>
                <a>ALOOOOOOOOOO</a>
            </nav>
        </header>
    )
}