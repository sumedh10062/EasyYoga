import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import CustomerHomePage from "./Pages/customerHomePage/CustomerHomePage";
import Home from "./Pages/home/Home";
import Centre from "./Pages/centres/Centres";
import List from "./Pages/list/List";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/userRegister/SignUp";
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/centres" element={<List/>}></Route>
        <Route path="/centres/:id" element={<Centre/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/customer" element={<CustomerHomePage />}></Route>
        <Route path="/register" element={<SignUp/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
