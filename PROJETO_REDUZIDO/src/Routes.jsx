import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";      

function Routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
<Route path="/Reservas" element={<Reservas/>}></Route>

                            </Routes>
        </BrowserRouter>
    )
}
export default Routes