import React, { useEffect, useState } from "react";
import './about-styles.css'
import avatar from '../../assets/avatar.png'

export function About(){
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);    

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
        
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
        <>
        <section id="about">

          <div className="about_name">
            <h1>David Serrate </h1>
            <h2>Full Stack Developer</h2>
             
            {screenWidth <= 468  && <img className="avatar" src={avatar} alt="avatar"/> }
            <p className="about_apresentation">Olá, eu sou David Serrate, um Desenvolvedor a mais de 3 anos, formado em
                engenharia de software pela Universidade
                Federal de Mato Grosso do Sul, experiente na
                criação de sistemas. Proficiente nas tecnologias
                como React JS, Node.js e SQL. Seguindo as boas
                práticas de desenvolvimento de software.
            </p>
          </div>
          {screenWidth >= 468  && <img className="avatar" src={avatar} alt="avatar" /> }
        </section>
   
        </>
    )
}