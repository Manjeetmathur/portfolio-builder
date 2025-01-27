import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Login from "../Components/Auth/Login/Login";
import Register from "../Components/Auth/Register/Register";
import FrontInterface from "../Components/send/FrontInterface";
import Template1 from "../Components/send/templates/Template1/Templateq";
import Template2 from "../Components/send/templates/Template2/Template2";
import Profile from "../Components/Profile/Profile";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import Intro from "../Components/Intro/Intro";
import Create from "../Components/Create/Create";

const router = createBrowserRouter([
       {
              path : "/",
              element : <App/>,
              children:[
                     {
                            path : "/",
                            element :<Home/>   
                     },
                     {
                            path : "/create",
                            element :<ProtectedRoutes>  <Create/> </ProtectedRoutes>
                     },
                    
                     {
                            path : "/login",
                            element :<Login/>
                     },
                     {
                            path : "/register",
                            element : <Register/>
                     },
                     {
                            path : "/send",
                            element : <ProtectedRoutes>  <FrontInterface/> </ProtectedRoutes>
                     },
                     {
                            path : "/template1/:id",
                            element : <Template1/>
                     },
                     {
                            path : "/template2/:id",
                            element : <Template2/>
                     },
                     {
                            path : "/profile",
                            element : <ProtectedRoutes>   <Profile/></ProtectedRoutes>
                     },
                     // {
                     //        path : "/post",
                     //        element : <Post/>
                     // },
                     
              ]
       },
       
       
       
])
export default router