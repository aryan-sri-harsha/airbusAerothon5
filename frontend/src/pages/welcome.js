import React,{useContext, useEffect, useState} from 'react'
import { Link, Redirect, Route, Switch, useHistory, useParams} from 'react-router-dom'
import axios from "axios";
import {Protected} from './data'
function Welcome(props) {
    
    const history = useHistory();
    const [logged,Setlogged]= useContext(Protected);
    const variable = useParams();
    let [obj,setObj]  = useState([]);
    useEffect(()=>{
        if(parseInt(variable.type) === 0){
            axios.get(`http://localhost:5000/aircraftParts/Condition/used`)
        .then(data=> {
            setObj(data.data);
            
        })
        .catch(err=>console.log(err))
        }
        
    },[])
    //console.log(variable);
    // this is  a string 
    const changing =()=>{
        console.log("changed");
    }
    function logout(){
        history.push("/");
        Setlogged(false);
    }
    function getPart(part_id){
        axios.get(`http://localhost:5000/aircraftParts/_id/${part_id}`)
        .then(data => {return data.data})
    }
    if(!logged) return <Redirect to="/"></Redirect>
    // let info ;
    return (
        
        <div className="welcome">
            
           <h1> {variable.userName} </h1>
           <h1> {variable.type} </h1>
            
           {obj.map((item) => {
            return (
              <div key={item._id}>
              <div  >
                <p>Posted by {item.PartName}</p>
                <br></br>
                {/* { info =  getPart(item.part_id)} */}
                {/* <h2>{info.PartName}</h2>
                <br></br>
                <h2>{info.MaterialComposition}</h2> */}
                <br></br>
                <h4>{item.MaterialComposition}</h4>
              </div>
              <br />
              </div>
            );
          })}
          
        </div>
    )
}

export default Welcome


/*<button className="btn btn-primary btn-sm" onClick={logout}>Logout</button>
            <Link to={`/allposts/${variable.userName}`}> 
          <button className="btn btn-primary btn-md">
             All posts 
              </button> 
              </Link>  
              <Link to={`/myposts/${variable.userName}`}> 
          <button className="btn btn-primary btn-md">
              My posts
              </button> 
              </Link> 
              <Link to={`/account/${variable.userName}`}> 
          <button className="btn btn-primary btn-md">
              My Account
              </button> 
              </Link>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1 style={{color:'wheat'}}>Welcome {variable.userName}</h1> */
