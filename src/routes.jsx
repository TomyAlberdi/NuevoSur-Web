import { Navigate, useRoutes } from "react-router-dom";
import Layout from "@/Layout/Layout";
import LayoutProduct from "@/Layout/LayoutProduct";
import Home from "@/Pages/Home/Home";
import Product from "@/Pages/Product/Product";
import ProductList from "@/Pages/ProductList/ProductList";
import FAQ from "@/Pages/FAQ/FAQ";
import Search from "@/Pages/Search/Search";
import Contact from "@/Pages/Contact/Contact";

const CustomRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
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
          children: [
            {
              path: "/product/:id",
              index: true,
              element: <Product />,
            },
          ],
        },
      ],
    },
    {
      path: "/list",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ProductList />,
        },
      ],
    },
    {
      path: "/faq",
      element: <Layout />,
      children: [
        {
          element: <LayoutProduct />,
          children: [
            {
              index: true,
              element: <FAQ />,
            },
          ],
        },
      ],
    },
    {
      path: "/search/:query",
      element: <Layout />,
      children: [
        {
          element: <LayoutProduct />,
          children: [
            {
              index: true,
              element: <Search />,
            },
          ],
        },
      ],
    },
    {
      path: "/contact",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Contact />,
        },
      ],
    },
  ]);
};

export default CustomRouter;
