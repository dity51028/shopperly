import { AuthLayout, Root } from "../components";
import { Login, Signup } from "../pages/auth";



export const routes = [{
    path:'',
    element:<Root/>,
    children:[
        {
            path:'auth',
            element:<AuthLayout/>,
            children:[
                {
                    path:'signup',
                    element:<Signup/>

                },
                {
                    path:'login',
                    element:<Login/>
                }
            ]

        }
    ]
    
}]