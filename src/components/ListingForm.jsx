import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function ListingForm(){

    const history = useHistory();

    // const callInfoPage = async ()=>{

    //     try{
    //         const res = await fetch('/getDataSeller',{
    //             method: 'GET',
    //             headers:{
    //                 Accept: 'application/json',
    //                 "Content-Type": 'application/json'
    //             },
    //             credentials:"include"
    //         });

    //         const data = await res.json();
    //         console.log(data)

    //         if(!res.status === 200){
    //             const error = new Error(res.error);
    //             throw error;
    //         }

    //     }catch(err){
    //         console.log(err);
    //         history.push('/seller/signup')
    //     }

    // }

    // useEffect(()=>{
    //     callInfoPage();
    // },[]);

    const [list, setlist] = useState({
       productName:"",hashtag:"",price:""
    })

    let name,value;
    const handleInput = (e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setlist({...list, [name]:value})
    }

    const postData = async(e)=>{
        e.preventDefault();
        const {productName,hashtag,price} = list;
        const res = await fetch('/addListings',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                productName,hashtag,price
            })
        });

        const data = await res.json();
        console.log(data);
        if(data.status === "success"){
            window.alert('Listing Product Successful!');
            history.push("/seller/listings");        
        }else{
            window.alert("Something is wrong!\nError: "+ data.status);
        }

    }
    
    return(
        <>
            <form method="POST">
                <div>
                    <h3>Basic Information</h3>
                    <label for="productName">Product Name</label>
                    <input type="text" id="productName" name="productName"
                        value={list.productName}
                        onChange={handleInput}
                    />
                    <label for="hashtag">Hashtag</label>
                    <input type="text" id="hashtag" name="hashtag"
                        value={list.hashtag}
                        onChange={handleInput}
                    />
                    
                    <label for="price">Price</label>
                    <input type="text" id="price" name="price"
                        value={list.price}
                        onChange={handleInput}
                    />
                </div>

                <button type="submit" onClick={postData}>Done</button>
            </form>
        </>
    )
}

export default ListingForm;