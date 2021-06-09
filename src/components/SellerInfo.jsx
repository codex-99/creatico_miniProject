import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function SellerInfo(){

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

    const [sellerInfo, setSellerInfo] = useState({
        phoneNum:"", age:"", verification:"", vId:"", citizen:"", cmpName:"", address:"", pincode:""
    })

    let name,value;
    const handleInput = (e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setSellerInfo({...sellerInfo, [name]:value})
    }

    const postData = async(e)=>{
        e.preventDefault();
        const {phoneNum, age, verification, vId, citizen, cmpName, address, pincode} = sellerInfo;
        const res = await fetch('/sellerBasicInfo',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                phoneNum, age, verification, vId, citizen, cmpName, address, pincode
            })
        });

        const data = await res.json();
        console.log(data);
        if(data.status === "success"){
            window.alert('Registration Successful!');
            history.push("/seller/profile");        
        }else{
            window.alert("Something is wrong!\nError: "+ data.status);
        }

    }
    
    return(
        <>
            <form method="POST">
                <div>
                    <h3>Basic Information</h3>
                    <label for="phoneNumber">Phone Number</label>
                    <input type="number" id="phoneNumber" name="phoneNum"
                        value={sellerInfo.phoneNum}
                        onChange={handleInput}
                    />
                    <label for="age">Age</label>
                    <input type="number" id="age" name="age"
                        value={sellerInfo.age}
                        onChange={handleInput}
                    />
                    <label for="typeOfVerification">Verification Type</label>
                    <label for="verifyId">
                        <select name="verification" id="typeOfVerification"
                        onChange={handleInput}>
                            <option value="">---- Select ----</option>
                            <option value="AadharNumber">Aadhar Number</option>
                            <option value="DrivingLicience">Driving Licience</option>
                            <option value="Passport">Passport</option>
                            <option value="VoterId">Voter Id</option>
                        </select>
                    </label>
                    <input type="text" id="verifyId" name="vId"
                        value={sellerInfo.vId}
                        onChange={handleInput}
                    />
                    <label for="citizenship">Citizenship</label>
                    <input type="text" id="citizenship" name="citizen"
                        value={sellerInfo.citizen}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <h3>Company Information</h3>
                    <label for="companyName">Company Name</label>
                    <input type="text" id="companyName"
                        name="cmpName"
                        value={sellerInfo.cmpName}
                        onChange={handleInput}
                    />                    
                    <label for="companyAddress">Address</label>
                    <input type="text" id="companyAddress"
                        name="address"
                        value={sellerInfo.address}
                        onChange={handleInput}
                    />                    
                    <label for="companyPincode">Pincode</label>
                    <input type="number" id="companyPincode"
                        name="pincode"
                        value={sellerInfo.pincode}
                        onChange={handleInput}
                    />                    
                </div>

                <button type="submit" onClick={postData}>Done</button>
            </form>
        </>
    )
}

export default SellerInfo;