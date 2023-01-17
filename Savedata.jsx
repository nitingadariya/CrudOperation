import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./home.module.css"

const Savedata=()=>{

    let [name,setName] = useState("")
    let [designation,setDesignation] =useState("")
    let [salary,setSalary] =useState("")

    let navigate = useNavigate()

    let nameData=(n)=>{
        setName(n.target.value)
    }
    let designationData=(d)=>{
        setDesignation(d.target.value)
    }
    let salaryData=(s)=>{
        setSalary(s.target.value)
    }
    let save=(s)=>{
        s.preventDefault()
        axios.post("http://localhost:3000/data",{name, designation, salary})
        .then(
               ()=>{
                console.log("Data Added😉");
               })
               navigate("/users")
               axios.get("http://localhost:3000/data")
        .catch(
            ()=>{
                console.log("Data not Added😒");
            }
        )
    }
     let resetData=(e)=>{
        e.preventDefault()
        setName("")
        setDesignation("")
        setSalary("")
        console.log(name);
        console.log(designation);
        console.log(salary);

    }
    return(
        <div id={style.myform}>
           <form id={style.form}>
           <center id={style.newuser}><h1>NEW USER</h1></center>
            <label>Name</label>
            <input type="text" value={name} onChange={nameData}/> 
            <label>Designation</label>
            <input type="text" value={designation} onChange={designationData}/>
            <label>Salary</label>
            <input type="number" value={salary} onChange={salaryData}/>
            <span id={style.btn}>
            <button onClick={resetData}>Reset</button>
            <button onClick={save}>Save</button>
            </span>
           </form>
        </div>
    )
}
export default Savedata