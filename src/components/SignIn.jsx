import React, {useState} from 'react';
import '../styles/sign.css';
import SocialMedia from './SignPage/SocialMedia';
import {Link, useHistory} from 'react-router-dom';
import Design from '../assests/abArt.png';
import Cancel from '../assests/cancel.png'; 

function SignIn(){

    const history = useHistory();

    const [login, setLogin] = useState({
        emailId:"", password:""
    })

    let name,value
    const handleInput = (e)=>{
        name = e.target.name
        value = e.target.value
        setLogin({...login,[name]:value})
    }

    const loginData = async(e)=>{
        e.preventDefault();
        const {emailId, password} = login;
        const res = await fetch('/loginBuyers',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                emailId, password
            })
        });

        const data = await res.json();
        console.log(data);
        if(data.status === "success"){
            window.alert('Login Successful!');
            history.push("/");        
        }else{
            window.alert("Something is wrong!\nError: "+ data.status);
        }

    }

    return(
        <div className={"body"} >
            <div className={"authBox"}>
            <div className={"cancel"}>
                <Link exact to={'/'} ><img src={Cancel} alt={'cancel'} /></Link>
            </div>
            <div className="leftSide">
                <div className="box">
                    <div className="titleAuth">Log in</div>
                <form>
                <div className={"inputBox"}>
                        <input className={"inputS"} type={"email"} required placeholder={"E-Mail id"} name={"emailId"}
                        value={login.email}
                        onChange={handleInput} />
                    </div>
                <div className={"inputBox"}>
                    <input className={"inputS"} type={"password"} required placeholder={"Password"} name={"password"}
                        value={login.password}
                        onChange={handleInput}  />
                </div>
                
                <button className={"btnAuth"} onClick={loginData}>Go</button>
                </form>
                
                <div className={"text2"} ><div className={"createAcc"}>New User? <Link to={'/signup'} style={{ textDecoration: 'none', color: "#777777" }}>Create Account</Link></div></div>
                </div>
                </div>
            <div className={"rightSide"}>
                <img src={Design} alt={'Design'} />
            </div>
            </div>
        </div>
    )
}

export default SignIn;