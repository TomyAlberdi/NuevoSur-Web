import { Navigate, useRoutes } from "react-router-dom";
import Layout from "@/Layout/Layout";
import LayoutProduct from "@/Layout/LayoutProduct";
import Home from '@/Pages/Home/Home';
import Product from '@/Pages/Product/Product';
import ProductList from "@/Pages/ProductList/ProductList";

const CustomRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
    {
      path: "*",
      element: <Navigate to={"/"} />,
    },
    {
      path: "/product",
      element: <Layout />,
      children: [
        {
          element: <LayoutProduct />,
          children:[
            {
              path: "/product/:id",
              index: true,
              element: <Product />
            }
          ]
        }
      ]
    },
    {
      path: "/list",
      element: <Layout />,
      children: [{
        index: true,
        element: <ProductList />
      }]
    }
  ]);
};

export default CustomRouter;