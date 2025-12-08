import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";

const router =createBrowserRouter([

{
    path:"/",
    element:<Login></Login>
}



])


export default router;