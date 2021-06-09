import React, {useState} from 'react';
import '../styles/sign.css';
import {Link, useHistory} from 'react-router-dom';
import Design from '../assests/buisnessReport.png';

function SellerSignUp(){

    const history = useHistory();

    const [seller, setSeller] = useState({
        name:"",emailId:"",password:"",cPassword:""
    })

    let name,value;
    const handleInput = (e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setSeller({...seller, [name]:value})
    }

    const postData = async(e)=>{
        e.preventDefault();
        const {name, emailId, password, cPassword} = seller;
        const res = await fetch('/registerSellers',{
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
            history.push("/seller/basicInfo");        
        }else{
            window.alert("Something is wrong!\nError: "+ data.status);
        }

    }

    return(
        <div className={"body"} >
            <div className={"authBox"}>
            <div className="leftSide">
                <div className="box">
                    <div className="titleAuth">Sign Up</div>
                <form method="post">
                <div className={"inputBox"}>
                        <input className={"inputS"} type={"text"} required placeholder={"Name"} name={"name"}
                        value={seller.name}
                        onChange={handleInput} />
                    </div>
                <div className={"inputBox"}>
                    <input className={"inputS"} type={"email"} required placeholder={"E-Mail id"} name={"emailId"}
                        value={seller.email}
                        onChange={handleInput}
                    />
                </div>
                <div className={"inputBox"}>
                        <input className={"inputS"} type={"password"} required placeholder={"Password"} name={"password"}
                            value={seller.password}
                            onChange={handleInput}
                        />
                    </div>
                <div className={"inputBox"}>
                    <input className={"inputS"} type={"password"} required placeholder={"Confirm Password"} name={"cPassword"}
                        value={seller.cPassword}
                        onChange={handleInput}
                    />
                </div>
                <button className={"btnAuth"} onClick={postData}>Go</button>
                </form>
                
                <div className={"text2"} ><div className={"createAcc"}>Existing User? <Link to={'/seller/signin'} style={{ textDecoration: 'none', color: "#777777" }}>LogIn</Link></div></div>
                </div>
                </div>
            <div className={"rightSide"}>
                <img src={Design} alt={'Design'} />
            </div>
            </div>
        </div>
    )
}

export default SellerSignUp;