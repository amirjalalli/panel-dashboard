import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:ProductID", element: <Product /> },
];

export default routes;
