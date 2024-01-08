import React from "react";
import './skillCard-styles.css'

export function SkillCard(props){
    return(
        <div className="skill_card">
            <img className="skill_card__image"src={props.image} alt={`icone da skill ${props.name}`} />
            <p className="skill_card__name">{props.name}</p>
        </div>
    )
}