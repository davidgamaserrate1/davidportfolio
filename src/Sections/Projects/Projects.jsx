import React from "react";
import './projects-styles.css'
import { ProjectCard } from "../../components/ProjectCard";


export function Projects(){
    return(
        <section id='projects'>
            <h4>PROJETOS</h4>
            <div className="projects_list">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </section>
    )
}