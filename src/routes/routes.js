import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Services from "../components/Services";
import ServiceDetails from "../components/ServiceDetails";
import MyReviews from "../components/MyReviews";
import AddService from "../components/AddService";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/servicesid',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
        ]
    }
]);

export default router;
