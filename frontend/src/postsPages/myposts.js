import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { Protected } from "../pages/data";
function Myposts() {
  const [logged, Setlogged] = useContext(Protected);
  const [list, Setlist] = useState([]);
  const [style, SetStyle] = useState("");
  const [title, SetTitle] = useState("");
  const [body, SetBody] = useState("");
  const [bool,SetBool] = useState(false);
  const variable = useParams();
  //{ userName: "a", title: "a", body: "a" }
  useEffect(() => {
    axios
      .post("http://localhost:5000/logged/myposts", {
        userName: [variable.userName],
      })
      .then((user) => {
        //console.log(user.data[0].userName)
        Setlist(user.data);
        if (list.length <= 1) SetStyle("fill-1");
        else SetStyle("fill");
      });
  }, [list]);
  function deleting(id){
    console.log(id,typeof(id))
    axios
    .delete(`http://localhost:5000/logged/deletepost/${id}`)
    .then((info)=>{
      Setlist(list);
      console.log(info)
    })
  }
  function posting() {

    if(title ==="") SetBool(true);
    else if (body === "") SetBool(true);
    else{
    const obj ={userName:variable.userName,title:title,body:body}
    axios
      .post("http://localhost:5000/logged/post",obj)
      .then(()=>{
        Setlist(list);
        SetTitle("");
        SetBody("");
      })
    }
  }
  function handleTitle(e){
    SetTitle(e.target.value)
  }
  function handleBody(e){
    SetBody(e.target.value)
  }
  if (!logged) return <Redirect to="/"></Redirect>;

  return (
    <div className={style}>
      <Link to={`/welcome/${variable.userName}`}>
        <button className="btn btn-primary">Home</button>
      </Link>
      {bool?<div className="alert-danger"><h3>Please fill valid title ,content</h3>  </div>:null}
      <input
        type="text"
        className="form-control"
        style={{ width: "40%" }}
        placeholder="Title"
        value={title}
        onChange={handleTitle}
      />
      <textarea
        className="form-control"
        style={{ width: "40%" }}
        placeholder="Content"
        value ={body}
        onChange={handleBody}
      />
      <button className="btn btn-success" onClick={posting}>
        Post
      </button>
      {list.length === 0 ? <div>No posts yet</div> : null}
      {list.length !== 0
        ? list.map((item) => {
            return (
              <div  key={item._id}>
              <div className="post">
                <p>Posted by {item.userName}</p>
                <br></br>
                <h2>{item.title}</h2>
                <br></br>
                <h4>{item.body}</h4>
              </div>
              <button className="btn btn-danger" onClick={()=>deleting(item._id)}>delete</button>
              <br />

              </div>
            );
          })
        : null}
    </div>
  );
}

export default Myposts;
