import React, {useState} from 'react';
import '../styles/sign.css';
import SocialMedia from './SignPage/SocialMedia';
import {Link, useHistory} from 'react-router-dom';
import Design from '../assests/abArt.png';
import Cancel from '../assests/cancel.png'; 

function SignUp(){

    const history = useHistory();

    const [buyer, setBuyer] = useState({
        name:"",emailId:"",password:"",cPassword:""
    })

    let name,value;
    const handleInput = (e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setBuyer({...buyer, [name]:value})
    }

    const postData = async(e)=>{
        e.preventDefault();
        const {name, emailId, password, cPassword} = buyer;
        const res = await fetch('/registerBuyers',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name, emailId, password, cPassword
            })
        });

        const data = await res.json();
        console.log(data);
        if(data.status === "success"){
            window.alert('Registration Successful!');
            history.push("/signin");        
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
                    <div className="titleAuth">Sign Up</div>
                <form>
                <div className={"inputBox"}>
                        <input className={"inputS"} type={"text"} required placeholder={"Name"} name={"name"}
                        value={buyer.name}
                        onChange={handleInput} />
                    </div>
                <div className={"inputBox"}>
                    <input className={"inputS"} type={"email"} required placeholder={"E-Mail id"} name={"emailId"}
                        value={buyer.email}
                        onChange={handleInput} />
                </div>
                <div className={"inputBox"}>
                        <input className={"inputS"} type={"password"} required placeholder={"Password"} name={"password"}
                            value={buyer.password}
                            onChange={handleInput}/>
                    </div>
                <div className={"inputBox"}>
                    <input className={"inputS"} type={"password"} required placeholder={"Confirm Password"} name={"cPassword"}
                        value={buyer.cPassword}
                        onChange={handleInput}/>
                </div>
                <button className={"btnAuth"} onClick={postData}>Go</button>
                </form>
                <div className={"text2"} ><div className={"createAcc"}>Existing User? <Link to={'/signin'} style={{ textDecoration: 'none', color: "#777777" }}>LogIn</Link></div></div>
                </div>
                </div>
            <div className={"rightSide"}>
                <img src={Design} alt={'Design'} />
            </div>
            </div>
        </div>
    )
}

export default SignUp;