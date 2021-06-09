import React, {useEffect, useState} from 'react';
import '../styles/profile.css';
import SideBar from './SideBar';
import RightSideMain from './RightSideMain';
import {useHistory} from 'react-router-dom';


function SellerProfile(){

    const history = useHistory();

    const [userData, setUserData] = useState({});

    const callInfoPage = async ()=>{

        try{
            const res = await fetch('/getDataSeller',{
                method: 'GET',
                headers:{
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data)
            setUserData(data)

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

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
            <RightSideMain obj = {userData}/>
        </div>
    );
}

export default SellerProfile;