import React from "react";
import './projects-styles.css'
import { ProjectCard } from "../../components/ProjectCard";

import dashboard from '../../assets/projects/dashboard.png'
import delivery from '../../assets/projects/delivery.png'
import tarefas from '../../assets/projects/tarefas.png'
import links from '../../assets/projects/links.png'
import orders from '../../assets/projects/orders.png'
import ecommerce from '../../assets/projects/ecommerce.png'

const projects = [
    {
        name: 'Ecommerce aparelhos eletronicos',
        tools : 'TypeScript, React, React-query, Styled-components,Reduxjs/toolkit',
        description : 'A aplicação consome uma API de produtos e exibe uma lista de produtos de uma loja, permitindo a adição de produtos ao carrinho. O carrinho permite ajustar a quantidade de cada produto selecionado.', 
        url : 'https://clients-manager.vercel.app/',
        image : ecommerce
    },
    {
        name: 'Dashboard Clientes',
        tools : 'React, Chakra UI, Node (Express), MongoDB',
        description : 'Aplicação de cadastro de clientes e e gestão de seus serviços associados', 
        url : 'https://clients-manager.vercel.app/',
        image : dashboard
    },
    {
        name: 'Delivery',
        tools : 'React, Chakra UI, Node (Express), MongoDB',
        description : 'Projeto delivery, onde é possível realizar a seleção de itens do cardápio, adicionar e remover itens do carrinho, Além de realizar pedido', 
        url : 'https://david-delivery.vercel.app/',
        image : delivery
    },
    {
        name: 'Tarefas',
        tools : 'React JS, Ant Design, Java (Spring boot), Mysql, Figma',
        description : 'Sistema no qual é possível cadastrar e concluir tarefas em uma interface web', 
        url : 'https://github.com/davidgamaserrate1/brickup_challenge',
        image : tarefas
    },
    {
        name: 'Pagina de links',
        tools : 'React, Chakra UI, Swiper',
        description : 'Aplicação de cadastro de clientes e e gestão de seus serviços associados', 
        url : 'https://www.luannadesign.site/',
        image : links
    },
    {
        name: 'Back-end gerenciamento de pedidos',
        tools : 'Node.js (Express), MongoDB (usando mongoose), bcryptjs, jsonwebtoken e vercel para implantação',
        description : 'Servidor responsavel por tratar do gerenciamento de pedidos e autentição', 
        url : 'https://github.com/davidgamaserrate1/api_delivery_express/tree/master',
        image : orders
    },
]

export function Projects(){
    return(
        <section id='projects'>
            <h4>PROJETOS</h4>
            <div className="projects_list">
                {projects.map((project)=>
                    <ProjectCard
                        name ={project.name}
                        tools ={project.tools}
                        description={project.description}
                        url ={project.url}
                        image={project.image}
                    />
                )}
            </div>
        </section>
    )
}