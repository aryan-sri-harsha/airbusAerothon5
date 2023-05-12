import axios from "axios";
import React, { useContext, useState, useEffect} from "react";
import { Link,Redirect,useParams  } from "react-router-dom";
import { Protected } from "../pages/data";
function AllPosts() {
    
    const variable = useParams();
    const [list, Setlist] = useState([]);
    const [style, SetStyle] = useState("");
    const [logged, Setlogged] = useContext(Protected);
    useEffect(() => {
        axios
          .get("http://localhost:5000/logged/allpost")
          .then((user) => {
            //console.log(user.data[0].userName)
            Setlist(user.data);
            if (list.length <= 1) SetStyle("fill-1");
            else SetStyle("fill");
          });
      }, [list]);
if (!logged) return <Redirect to="/"></Redirect>;
    return (
        <div className={style}>
            <Link to={`/welcome/${variable.userName}`}>
        <button className="btn btn-primary">Home</button>
      </Link>
            {list.length === 0 ? <div>No posts yet</div> : null}
      {list.length !== 0
        ? list.map((item) => {
            return (
              <div key={item._id}>
              <div  className="post">
                <p>Posted by {item.userName}</p>
                <br></br>
                <h2>{item.title}</h2>
                <br></br>
                <h4>{item.body}</h4>
              </div>
              <br />
              </div>
            );
          })
        : null}
            
        </div>
    )
}

export default AllPosts
