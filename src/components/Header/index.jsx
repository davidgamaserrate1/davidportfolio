import { useState } from 'react'
import './header-styles.css'

export function Header (){
    const [aboutClicked, setAboutClicked]= useState(false)
    const [skillsClicked, setSkillsClicked]= useState(false)
    const [portfolioClicked, setPortfolioClicked]= useState(false)
    const [contactClicked, setContactClicked]= useState(false)
    
    const clickedClass = 'header_sections_item pointer'
    const resetState = ()=>{
        setAboutClicked(false)
        setSkillsClicked(false)
        setPortfolioClicked(false)
        setContactClicked(false)
    }

    return(
        <header className='header'>
            <div className='header_sections_title'>
                <a className={aboutClicked ? clickedClass : 'header_sections_item '} 
                    href='#about'
                onClick={()=>{
                    resetState()
                    setAboutClicked(true)
                }}
                >SOBRE</a>
                <a className={skillsClicked ? clickedClass : 'header_sections_item '}
                    href='#skills'
                  onClick={()=>{
                    resetState()
                    setSkillsClicked(true)
                }}>SKILLS</a>
                <a className={portfolioClicked ? clickedClass : 'header_sections_item '}
                  onClick={()=>{
                    resetState()
                    setPortfolioClicked(true)
                }}>PORTFOLIO</a>
                <a className={contactClicked ? clickedClass : 'header_sections_item '}
                onClick={()=>{
                    resetState()
                    setContactClicked(true)
                }}
                >CONTATO</a>
            </div>
        </header>
    )
}