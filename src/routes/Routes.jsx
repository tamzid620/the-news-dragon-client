import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/home',
                element: <Home></Home>, 
            }, 
            {
                path: '/category/:id',
                element: <Category></Category>, 
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }, 
        ]
    },
    {
        path: '/news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id', 
                element:<News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;