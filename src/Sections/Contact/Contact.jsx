import React from "react";
import './contact-styles.css'
import { SocialIcon } from "react-social-icons";

const socialNetwork = [
    {network:'linkedin', url:'https://www.linkedin.com/in/david-gama-dev', name:'Linkedin'},
    {network:'github' , url:"https://github.com/davidgamaserrate1", name:'Github'},
    {network: 'instagram', url : 'https://www.instagram.com/_dev.davidgama', name:'Instagram'},
    {network:'email', url:'mailto:contato.davidserrate@gmail.com', name:'contato.davidserrate@gmail.com'},
]

export function Contact(){
    return(
        <section id="contact">
            <h5>CONTATO</h5>
            <div className="contact_social">
                {socialNetwork.map((socialItem)=> 
                    <div className="contact_social__item">
                        <SocialIcon 
                            network={socialItem.network} 
                            url={socialItem.url} 
                        />
                        <span  className="contact_social__item__name">{socialItem.name}</span> 
                    </div>
                )}
            </div>  
        </section>
    )
}