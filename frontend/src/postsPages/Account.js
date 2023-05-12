import React,{ useContext } from 'react'
import { Link,useParams, Redirect } from 'react-router-dom'
import {Protected} from '../pages/data'
function Account() {
  const [logged,Setlogged]= useContext(Protected);
  const variable = useParams();
  if(!logged) return <Redirect to="/"></Redirect>
    return (
        <div>
             <p>welcome {variable.userName}</p>
             <Link to={`/welcome/${variable.userName}`}>
             <button className="btn btn-primary">
               Home
             </button>
             </Link>
            <Link to={`/changepassword/${variable.userName}`}  >
          <button className="btn btn-secondary" >change password</button>  
          </Link>
          
        </div>
    )
}

export default Account
