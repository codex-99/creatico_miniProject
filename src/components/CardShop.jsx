import React from 'react';
import {NavLink} from 'react-router-dom';
import {shopData} from './shopData';


function CardShop(){
    return (
        <>
        <div class="box">
        {shopData.map((val,key)=>{
                return <div>
                <NavLink exact to={"/"} ><img src={val.src} alt={key} /></NavLink>
                <h3>{val.productName}</h3>
                <h4>Price: {val.price}</h4>
                </div>
                })}
                </div>
        </>
    )
}

export default CardShop;