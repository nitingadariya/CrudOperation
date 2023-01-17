import style from "./home.module.css"
import { Link } from "react-router-dom"

const Home=()=>{
    return(
       <section id={style.nav}>
        <Link to="/" href="">STORE DATA</Link>
        <Link to="users" href="">USERS</Link>
       </section>
    )
}
export default Home