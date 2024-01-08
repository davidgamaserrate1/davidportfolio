import React from "react";
import './projectCard-styles.css'
import { Image } from "antd";

export function ProjectCard(props){
    
   
    return(
        <div className="project_card">
            <Image
                className="project_card__image"                  
                alt={`imagem do projeto ${props.name}`} 
                src={props.image} 
                width={300}
                height={200}
            />            
            <div className="project_card__info">
                <div className="project_card__info_title" >{props.name}</div>
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