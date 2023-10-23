
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Error from "./Error";
import Cart from "./Cart";
import Pages from "./Pages";
const router = createBrowserRouter([
  {path:"/" , element:<Home/>},
  {path:"/about" , element:<About/>},
  {path:"/contact" , element:<Contact/>},
  {path:"/product" , element:<Product/>},
  {path:"/cart", element:<Cart/>},
  {path:"/pages/:Id", element:<Pages/>},
  {path:"*" , element:<Error/>},


])
function App() {


  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
