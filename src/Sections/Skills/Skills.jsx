import React from "react";
import './skills-styles.css'

import react from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'    
import figma from '../../assets/figma.png'
import git from '../../assets/git.png'
import mongo from '../../assets/mongo.png'
import node from '../../assets/node.png'
import sql from '../../assets/sql.png'
import mui from '../../assets/mui.png'
import chakra from '../../assets/chakra.png'
import { SkillCard } from "../../components/SkillCard";

const skills = [
    { name:'React JS', image: react}, 
    { name:'HTML', image: html}, 
    { name:'CSS', image: css}, 
    { name:'JavaScript', image: js}, 
    { name:'Figma', image: figma}, 
    { name:'Git/Github/GitLab', image: git}, 
    { name:'Mongo DB', image: mongo}, 
    { name:'Node JS', image: node}, 
    { name:'SQL Oracle', image: sql}, 
    { name:'Chakra', image: chakra}, 
    { name:'Material UI', image: mui}, 
    
    
]

export function Skills(){
    return(
        <section id='skills'> 
            <h3>SKILLS</h3>
            <div className="skills_list">
                {skills.map((skill)=> <SkillCard name={skill.name} image={skill.image}/> )}
            </div>
        </section>
    )
}