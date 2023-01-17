import axios from "axios"
import { useEffect, useState } from "react"
import style from "./home.module.css"
import { Link } from "react-router-dom"

const Users=()=>{
    
    let[content,SetContent]= useState([])
    
  let deleteData =(id)=>{
    axios.delete(`http://localhost:3000/data/${id}`)
    // window.location.assign("/users")
    .then(
      ()=>{
       console.log("Data Has Been Deleted");
       axios.get("http://localhost:3000/data")
       .then(
        (x)=>{
          SetContent(x.data)
        }
       )
      })
  }
  

  useEffect( ()=>{
    axios.get("http://localhost:3000/data")

    .then((response)=>{
      // console.log(response.data);
      SetContent(response.data)
    })
  },[])

    return(
        <div id={style.box}>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </table>
          {content.map( (x)=>{
            return(
              <div id={style.profile} key={x.id}>
             <h4>{x.name}</h4> 
             <h4>{x.designation}</h4>
             <h4>{x.salary}</h4>
             <span id={style.btn2}>
             <button id={style.delete} onClick={()=>{deleteData(x.id)}}><i class="fa-regular fa-trash-can"></i></button>
             <button id={style.edit}><Link to={`/edit/${x.id}`}><i class="fa-regular fa-pen-to-square"></i></Link></button>
             </span>
            </div>
            )
          })}
         
        </div>
    )
}
export default Users