import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from "./home.module.css"

const Editusers=()=>{
    let [name,setName] = useState("")
    let [designation,setDesignation]= useState("")
    let [salary,setSalary] =useState("")

    let nameData=(n)=>{
        setName(n.target.value)
    }
    let designationData=(d)=>{
        setDesignation(d.target.value)
    }
    let salaryData=(s)=>{
        setSalary(s.target.value)
    }

    let navigate = useNavigate()

    let {ID} =  useParams()
    console.log(ID);

    useEffect( ()=>{
        axios.get(`http://localhost:3000/data/${ID}`)
        .then( (response)=>{
            setName(response.data.name)
            setDesignation (response.data.designation)
            setSalary (response.data.salary)

        })
    },[ID])

    let reset=(r)=>{
        setName("")
        setDesignation("")
        setSalary("")
    }
        let save=(s)=>{
            s.preventDefault()
        axios.put(`http://localhost:3000/data/${ID}`,{name, designation, salary})
        .then(
               ()=>{
                console.log("Data Is Added");
               })
                navigate("/users")
                axios.get("http://localhost:3000/data")
    }
            return(
                <div id={style.myform}>
           <form id={style.form}>
           <center id={style.edituser}><h1>EDIT USER</h1></center>
            <label>Name</label>
            <input type="text" value={name} onChange={nameData} required />
            <label>Designation</label>
            <input type="text" value={designation} onChange={designationData} required/>
            <label>Salary</label>
            <input type="number" value={salary} onChange={salaryData} required/>
            <span id={style.btn}>
            <button onClick={reset}>Reset</button>
            <button onClick={save}>Save</button>
            </span>
           </form>
        </div>
            )
}
export default Editusers