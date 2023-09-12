import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import MainLayout from "../layout/MainLayout";
import DashboardPage from "../pages/DashboardPage";
import Order from "../pages/OrderPage";
import ProductPage from "../pages/ProductPage";
import OrderDetailPage from "../pages/OrderDetailPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import Edit from "../pages/EditPage";
import Create from "../pages/CreatePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // {
      //   index: true,
      //   element: <LoginPage />
      // },
      {
        path: "dashboard",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
        ],
      },
      {
        path: "order",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Order />,
          },
          {
            path: ":id",
            element: <OrderDetailPage />,
          },
        ],
      },
      {
        path: "product",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <ProductPage />,
          },
          {
            path: ":id",
            element: <ProductDetailPage />,
          },
        ],
      },
      {
        path: "edit",
        element: <MainLayout />,
        children: [
          {
            path: ":id",
            element: <Edit />,
          },
        ],
      },
      {
        path: "create",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Create />,
          },
        ],
      },
    ],
  },
]);
