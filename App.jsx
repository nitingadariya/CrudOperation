import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home"
import Users from "./Users"
import Editusers from "./Editusers"
import Savedata from "./Savedata"
const App=()=>{
    return(
        <div>
           
           <BrowserRouter>
           <Home/>
           <Routes>
                  <Route path="/" element={<Savedata/>}/>
                  <Route path="/users" element={<Users/>}/>
                  <Route path="/edit/:ID" element={<Editusers/>}/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App