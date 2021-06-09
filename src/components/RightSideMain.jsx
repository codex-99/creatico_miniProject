import React from 'react';
import '../styles/rightSide.css';
import Freelancing from '../assests/freelancing.png';
import {rightSideData} from './rightSideData.js';

function RightSideMain(props){

    var Name = props.obj.name;

    return(
        <div className={'rightside'}>
            <h3 id={'head'}>DashBoard</h3>
            <div className={'profileInfo'}>
                <img id={'pic'} src={Freelancing} alt={"Freelancing pic"}/>
                <div className={"personalInfo"}>
                    <h1 id={'name'} >Namaste, {Name}!</h1>
                    <p>Now when you visit India, you would<br/>know how to say "Hello".</p>
                </div>
                <div className={'blocks'}>
                {rightSideData.map((val,key)=>{
                    return <div key={key} className={'block'}>
                        <h3>{val.title}</h3>
                        <div id={'value'} >{val.info}</div>
                        <div id={'valueBtn'} >{val.btn}</div>
                    </div>
                })}</div>
            </div>

        </div>
    )
}

export default RightSideMain;