import axios from 'axios';
import React, { useState,useContext } from 'react'
import { useParams,Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import {Protected} from './data'
function ChangePasword() {
    const [logged,Setlogged]= useContext(Protected);
    const variable = useParams();
    const [texting,Settexting]= useState({userName:variable.userName});
    const [bool,SetBool] = useState(false)
    const history = useHistory();
   function handlepass (e){
       SetBool(false)
       const nam = e.target.name;
       const val = e.target.value;
       Settexting({...texting,[nam]:val})

   }
   //-------------------------
   function changing(){
       console.log(texting)
       var length = 0;
       for (var i in texting) length++;
        if(length < 3) return SetBool(true);
        if (texting.old==" ") return SetBool(true);
       else if (texting.new==" ") return SetBool(true);
        else{
       axios.put("http://localhost:5000/changepassword",texting)
       .then(res=>{console.log(res.data)
                history.push("/welcome");
    })
       .catch(err=>console.log(err))
        }
   }
   if(!logged) return (<Redirect to="/"></Redirect>) ;
    return (
        <div>
            <center>
            {bool?<div className="alert-danger">Please fill credentials</div> :null}
        <label >Old password</label>
          <input type="text" name ="old" onChange={handlepass} />
          <br></br>  
          <label >New password</label>
          <input type="text" name="new"onChange={handlepass}/> 
          <button onClick={changing} >Confirm</button>
          </center>
        </div>
    )
}

export default ChangePasword
