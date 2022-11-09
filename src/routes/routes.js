import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);

export default router;
