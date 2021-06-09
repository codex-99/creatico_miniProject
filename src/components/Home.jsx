import React from 'react';
import {useHistory} from 'react-router-dom';
import NavBar from './HomePage/NavBar';
import '../styles/navBar.css';
import '../styles/home.css';
import '../styles/collage.css';
import Flower from '../assests/flower.png';
import Bird from '../assests/bird.png';


function Home(){

    const history = useHistory();

    const pushFunction = ()=>{
        history.push('/shop')
    }

    const oneStop = 'Your One-Stop-Shop.'
    return(
        <div  >
            <NavBar />
            <div className={"bgImage bgImage1"}>
                <div>
                    <img src={Flower} alt={"flower"} className={"flower"} />
                    <img src={Bird} alt={"bird"} className={"bird"} />
                </div>
                <div className={"headDiv"} >
                    <h1 className={"headerStyle"} >Creatico</h1>
                    <h1 className={"oneStop"} >{oneStop}</h1>
                </div>
            </div>
            <button className={"browse"} onClick ={pushFunction} >Shop</button>
        </div>
    )
}

export default Home;
