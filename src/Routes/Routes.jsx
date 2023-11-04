import {createBrowserRouter} from 'react-router-dom'
import RootPage from '../Pages/RootPage/RootPage'
import HomePage from '../Pages/HomePage/HomePage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage'
import AvailableFoodsPage from '../Pages/AvailableFoodsPage/AvailableFoodsPage'
import AddFoodPage from '../Pages/AddFoodPage/AddFoodPage'
import ManageMyFoodsPage from '../Pages/ManageMyFoodsPage/ManageMyFoodsPage'
import MyFoodRequestPage from '../Pages/MyFoodRequestPage/MyFoodRequestPage'
import ManageSingleFoodPage from '../Pages/ManageSingleFoodPage/ManageSingleFoodPage'
import SingleFoodDetailsPage from '../Pages/SingleFoodDetailsPage/SingleFoodDetailsPage'


const routes = createBrowserRouter([
    {
        path:'/',
        element:<RootPage/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/login',
                element:<LoginPage/>
            },
            {
                path:'/register',
                element:<RegisterPage/>
            },
            {
                path:'/availablefood',
                element:<AvailableFoodsPage/>
            },
            {
                path:'/singlefoodview',
                element:<SingleFoodDetailsPage/>
            },
            {
                path:'/addfood',
                element:<AddFoodPage/>
            },
            {
                path:'/managefood',
                element:<ManageMyFoodsPage/>
            },
            {
                path:'/managesinglefood',
                element:<ManageSingleFoodPage/>
            },
            {
                path:'/foodreq',
                element:<MyFoodRequestPage/>
            },
            {

            }
            
        ]
    }
])


export default routes;