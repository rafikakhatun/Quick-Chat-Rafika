import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Registration from "../components/Registration";

const router =createBrowserRouter([

{
    path:"/",
    element:<Login></Login>
},

{
    path:"/register",
    element:<Registration></Registration>

},



])


export default router;