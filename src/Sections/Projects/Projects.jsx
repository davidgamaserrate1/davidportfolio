import React from "react";
import './projects-styles.css'
import { ProjectCard } from "../../components/ProjectCard";

import dashboard from '../../assets/projects/dashboard.png'
import delivery from '../../assets/projects/delivery.png'
import tarefas from '../../assets/projects/tarefas.png'
import links from '../../assets/projects/links.png'
import orders from '../../assets/projects/orders.png'
import ecommerce from '../../assets/projects/ecommerce.png'
import sales from '../../assets/projects/sales.png'
import salesBackEnd from '../../assets/projects/sales-backend.png'
import library from '../../assets/projects/biblioteca.png'

const projects = [
    {
        name: 'Ecommerce aparelhos eletronicos',
        tools : 'TypeScript, React, React-query, Styled-components,Reduxjs/toolkit',
        description : 'Lista de produtos de uma loja. Onde é possivel selecionar e ajustar a quantidade de cada produto selecionado.', 
        url : 'https://clients-manager.vercel.app/',
        image : ecommerce
    },
    {
        name: 'Dashboard Clientes',
        tools : 'React, Chakra UI, Node (Express), MongoDB',
        description : 'Aplicação de cadastro de clientes e gestão de seus serviços associados', 
        url : 'https://clients-manager.vercel.app/',
        image : dashboard
    },
    {
        name: 'Relatorio de vendas',
        tools : 'React, html2canvas, Google charts',
        description : 'Painel com gráficos de vendas de alguns produtos, com possibilidade de exportação do relatorio em PDF', 
        url : 'https://clients-manager.vercel.app/',
        image : sales
    },
    {
        name: 'Delivery',
        tools : 'React, Chakra UI, Node (Express), MongoDB',
        description : 'Projeto delivery, onde é possível realizar a seleção de itens do cardápio, adicionar e remover itens do carrinho, Além de realizar pedido', 
        url : 'https://delivery-gilt-eta.vercel.app/',
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
    {
        name: 'Back-end Biblioteca',
        tools : 'Node.js (Nest TS),TypeScript MongoDB, bcryptjs, jsonwebtoken',
        description : 'Servidor responsavel por tratar do gerenciar livros de uma biblioteca', 
        url : 'https://github.com/davidgamaserrate1/library_nest/tree/master',
        image : library
    },
    {
        name: 'Back-end cadastro de produtos',
        tools : 'Node.js (Nest TS), TypeScript, Prisma, PostgreSQL bcryptjs, jsonwebtoken',
        description : 'Servidor responsavel por tratar do cadastro de produtos', 
        url : 'https://github.com/davidgamaserrate1/sales_dashboard/tree/master/back-end',
        image : salesBackEnd
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