import React, {useEffect, useState} from 'react';
import '../styles/profile.css';
import SideBar from './SideBar';
import '../styles/rightSide.css';
import {useHistory} from 'react-router-dom';


function Listing(){

    const history = useHistory();

    const [userData, setUserData] = useState({});

    const callInfoPage = async ()=>{

        try{
            const res = await fetch('/getListings',{
                method: 'GET',
                headers:{
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data[0])
            setUserData(data)

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

            // console.log(userData)

        }catch(err){
            console.log(err);
            history.push('/seller/signin')
        }

    }

    useEffect(()=>{
        callInfoPage();
    },[]);


    return(
        <div className={'body'}>
            <SideBar/>
            <div className={'rightside'}>
            <h3 id={'head'}>Listings</h3>
            <div className={'profileInfo'}>
                
                <div className={'blocks'}>
                {userData.map(info=>{
                    return <div className={'block'}>
                        <h3>{info.name}</h3>
                        <div id={'value'} >{info.productName}</div>
                        <div id={'valueBtn'} >{info.price}</div>
                    </div>
                })}</div>
            </div>

        </div>
        </div>
    );
}

export default Listing;