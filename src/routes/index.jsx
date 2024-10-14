import { createBrowserRouter } from "react-router-dom";
import { AboutUs } from "../screens/AboutUs";
import App from "../app";
import { Landing } from "../screens/Landing";


const Routes = createBrowserRouter([
    
    
      {
        path:'/',
        element: <Landing />,
      },
      {
        path:'/about',
        element: <AboutUs />,
      },
      
    
      ]);
  
  export default Routes