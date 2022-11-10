import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Services from "../components/Services";
import ServiceDetails from "../components/ServiceDetails";
import MyReviews from "../components/MyReviews";
import AddService from "../components/AddService";
import Blog from "../components/Blog";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import MyReviewsEdit from "../components/MyReviewsEdit";
import PrivateRoute from "./PrivateRoute";


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
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://vacarion-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
            },
            {
                path: '/reviewedit/:id',
                element: <PrivateRoute><MyReviewsEdit></MyReviewsEdit></PrivateRoute>,
                loader: ({params}) => fetch(`https://vacarion-server.vercel.app/reviewedit/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
]);

export default router;
