import axios from 'axios';
import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
function Forgetpassword() {
    const history = useHistory();
    const [texting,Settexting] = useState("");
    const [existing,setExisting] = useState(false);
    const [mailed,setMailed] = useState(false);
    
    function handleText(e){
        Settexting(e.target.value) ;
    }
    function sendMail(){
        setExisting(false);
        setMailed(false);
        axios.post("http://localhost:5000/forgetpassword",{userName:texting})
        .then(result=>{
            if(result.data.aldready===0)  setExisting(true);
            else {
                setMailed(true);
                Settexting("");
            }
        })
    }

    return (
        <div>
            {existing ? <p>username entered doesnot exist</p>:null }
            {mailed ?
                <div>
                <p>Mail sent sucessfully</p>
                <p> go to login gage</p>
                <Link to="/">Login</Link>
                </div>: null
            }
            <div>
                <h6>Enter the registered user name to recieve mail of your password</h6>
                <label className="form-label"><h2>Username</h2></label>
                <input placeholder="Username"className="form-control" type="text" onChange={handleText} />
                <button type="submit" className="btn btn-secondary"onClick={sendMail}>Send mail </button>
            </div>
        </div>
    )
}

export default Forgetpassword
