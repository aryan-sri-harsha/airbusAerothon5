import React,{useEffect, useState} from 'react'

function Alertinguser(props) {
    // var [boolvar,Setboolvar] = useState(true) ;
    // useEffect(() => {
        
    //     setTimeout(() => {
    //         Setboolvar( false) ; 
    //     }, 2000);
        
    // }, [])
    
    return (
        <div>
            
          {/* {boolvar ?<p>{props.text}</p>:null } */}
          {/* {console.log(boolvar)} */}
          <p className="alert-danger">{props.text}</p>
        </div>
    )
}

export default Alertinguser ;
