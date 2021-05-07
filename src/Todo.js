import React from "react";


export default function Todo(props) {

 
  return (
    <div className={props.x.completed?"item active":"item"}>
      <h3>{props.x.title}</h3>
      <button onClick={e=>props.del(props.x.id)}>delete</button>
      
    </div>
  )
}


