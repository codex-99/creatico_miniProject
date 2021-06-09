import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Signout(){

    const history = useHistory();

    useEffect(()=>{
        fetch('/seller/signout',{
            method:'GET',
            headers:{
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            credentials:"include"
        }).then((res)=>{
            history.push('/seller/signin');
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err)
        })
    })

    return(
        <>

        </>
    )
}

export default Signout