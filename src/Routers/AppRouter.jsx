import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";
import UserProtected from "../Pages/User/UserProtected";

const router= createBrowserRouter ([
    {
        path:'/',
        element:<MainLayout/>,
        children:[{
            index: true,
            element:<Home/>
        },
        {
            element:<UserProtected/>,
            children:[
                {
                    path:'user',
                    element:<User/>
                }
            ]
        }
    ]
    },
    {
        path:'/login',
        element:<login/>
    }
])

//const AppRouter = () => {
   // return(
        //<BrowserRouter>
        //<Routes>
            //<Route path="/" element={<MainLayout/>}>
              //  <Route index element={<Home />}/>
                
                //<Route element={<UserProtected/>}>
                 // <Route path="user" element={<User/>}/>
                //</Route>
           // </Route>
           // <Route path="/login" element={<Login/>}/>
       // </Routes>
       // </BrowserRouter>
   // )
//}

const AppRouter = () => {
    return< RouterProvider router={router}/>;
}

export default AppRouter;