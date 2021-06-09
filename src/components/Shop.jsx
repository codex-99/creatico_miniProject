import React from 'react'
import NavBar from './HomePage/NavBar';
import CardShop from './CardShop';
//import '../styles/shop.css';

function Shop(){
    return(
        <>
            <NavBar color="black" />
            <section class="main-container">
                <div class="location" id="home">
                    <h1 id="home">All-Time Best Sellers</h1>
                    <CardShop />   
                </div>
            </section>
        </>
    )
}

export default Shop;