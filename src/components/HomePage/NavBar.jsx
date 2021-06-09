import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(props){
    return(
        <div className={'navBarM'} >
            <div className={"navbar"} >
                <div className={"navItems"}  >
                    <NavLink exact to={"/"} activeClassName='is-active' className={"navLinks"} style={{color: props.color}}>Home</NavLink>
                </div>
                <div className={"navItems"} >
                    <NavLink to={"/seller/signin"} activeClassName='is-active' className={"navLinks"} style={{color: props.color}}>Seller</NavLink>
                </div>
                <div className={"navItems"} >
                    <NavLink to={"/signin"} activeClassName='is-active' className={"navLinks"} style={{color: props.color}}>Buyer</NavLink>
                </div>
                <div className={"navItems"} >
                    <NavLink to={"/cart"} activeClassName='is-active' className={"navLinks"} style={{color: props.color}}>Cart</NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;