import React from "react";
import dashboard from '../../assets/dashboard.png'
import './projectCard-styles.css'
import { Image } from "antd";

export function ProjectCard(){
    
    const props ={
        title : 'Dashboard Clientes',
        tools : 'React, Chakra UI, Node (Express), MongoDB',
        description : 'Aplicação de cadastro de clientes e e gestão de seus serviços associados', 
        url : 'https://clients-manager.vercel.app/',
        image : dashboard
    }

    return(
        <div className="project_card">
            <Image
                className="project_card__image"                  
                alt={`imagem do projeto ${props.title}`} 
                src={props.image} 
                width={500}
                height={'100%'}
            />            
            <div className="project_card__info">
                <div className="project_card__info_title" >{props.title}</div>
                <div className="project_card__info_tools" >{props.tools}</div>
                <p className="project_card__info_description" >{props.description}</p>                
                <div className="project_card__info__link"> 
                    <a href={props.url}  target="_blank">Detalhes</a>
                    <span className="material-symbols-outlined arrow">arrow_forward</span>
                </div>
            </div>
        </div>
    )
}