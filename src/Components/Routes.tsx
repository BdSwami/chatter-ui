import { createBrowserRouter } from "react-router-dom";
import Login from "./Auth/Login";
import Sginup from "./Auth/Sginup";

const router = createBrowserRouter ([
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/sginUp',
        element : <Sginup />
    }
]);

export default router;
