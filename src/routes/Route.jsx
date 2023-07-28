import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import About from "../pages/About/About";
import Project from "../pages/Project/Project";
import Contact from "../pages/Contact/Contact";


   const router = createBrowserRouter ([
     {
        path:'',
        element:<Main></Main>,
        children:[
         {
            path:'/',
            element:<Home></Home>
         },
         {
            path:'about',
            element:<About></About>
         },
         {
            path:'project',
            element:<Project></Project>
         },
         {
            path:'contact',
            element:<Contact></Contact>
         }
        ]
     }

   ])

   export default router;


