import React from 'react';
import '../styles/sidebar.css';
import {sideBarData} from './sideBarData';

function SideBar(){
    return(
        <div className={'sideBar'}>
                <h1>The Creatico</h1>
                <ul className={'sideBarList'}>
                {sideBarData.map((val,key)=>{
                    return <li key={key} className={'row'} 
                        id={window.location.pathname===val.link? "active" : ""}
                        onClick={()=>{window.location.pathname=val.link}}>
                        <div id={'icon'} >{val.icon}</div>{" "}
                        <div id={'title'} >{val.title}</div>
                    </li>
                })}
                </ul>
        </div>
    )
}

export default SideBar;