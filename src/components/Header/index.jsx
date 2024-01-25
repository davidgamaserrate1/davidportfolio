import { useState } from 'react'
import './header-styles.css'

import headerItems from '../../data/headerItems'
import { Link } from 'react-scroll'
import { useEffect } from 'react'

export function Header (){
    const [clicked, setClicked]= useState(false)
    const [headerItemsList , setHeaderItemsList ] = useState(headerItems || {})
    
    const clickedClass = 'header_sections_item pointer'
    
    
    function click(id){
        let current_list = headerItems
        current_list.map((item)=> item.active = false)

        current_list[id-1].active = true


        setHeaderItemsList(headerItemsList)

        console.log(headerItemsList)
    }
    
     
 
    return(
        <header className='header'>
            <ul className='header_sections_title'>

                {headerItemsList.map((item) => 
              
                <li key={item.id} className={item.active ? 'header_sections_item pointer' : "header_sections_item"}    >
                {console.log(item.active)}      
                    <Link 
                        onClick={()=>{click(item.id)}}
                         to={item.url} 
                        smooth={true} 
                        offset={ item.offset }  
                        duration={1000}
                      
                    >
                    {item.label}
                    </Link>
                </li>
                )}
            </ul>
        </header>
    )
}

