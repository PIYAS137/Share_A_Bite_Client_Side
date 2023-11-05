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
import UpdateFoodPage from '../Pages/UpdateFoodPage/UpdateFoodPage'
import PrivateRoute from '../Private/PrivateRoute'


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
                element:<PrivateRoute><SingleFoodDetailsPage/></PrivateRoute>
            },
            {
                path:'/addfood',
                element:<PrivateRoute><AddFoodPage/></PrivateRoute>
            },
            {
                path:'/managefood',
                element:<PrivateRoute><ManageMyFoodsPage/></PrivateRoute>
            },
            {
                path:'/managesinglefood',
                element:<PrivateRoute><ManageSingleFoodPage/></PrivateRoute>
            },
            {
                path:'/foodreq',
                element:<PrivateRoute><MyFoodRequestPage/></PrivateRoute>
            },
            {
                path:'/updatefood',
                element:<PrivateRoute><UpdateFoodPage/></PrivateRoute>
            }
            
        ]
    }
])


export default routes;