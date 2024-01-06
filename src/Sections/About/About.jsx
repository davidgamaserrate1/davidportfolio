import React from "react";
import './about-styles.css'
import avatar from '../../assets/avatar.png'
import { Divider } from "../../components/Divider";

export function About(){
    return(
        <>
        <section id="about">
          <div className="about_name">
            <h1>David Serrate</h1>
            <h2>Full Stack Developer</h2>
            <Divider/>
            <p className="about_apresentation">Olá, eu sou David Serrate, um Desenvolvedor a mais de 3 anos, formado em
                engenharia de software pela Universidade
                Federal de Mato Grosso do Sul, experiente na
                criação de sistemas. Proficiente nas tecnologias
                como React JS, Node.js e SQL. Seguindo as boas
                práticas de desenvolvimento de software.
            </p>
          </div>
          <img className="avatar" src={avatar}/>
           
        </section>
   
        </>
    )
}