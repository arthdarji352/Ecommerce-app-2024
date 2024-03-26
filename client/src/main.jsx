import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import store from "./store.js";
import CartScreen from "./screens/CartScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ResetPassword from "./screens/ResetPassword.jsx";
import ShippingScreen from "./screens/ShippingScreen.jsx";
import PaymentScreen from "./screens/PaymentScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import SuccessScreen from "./screens/SuccessScreen.jsx";
import UserListScreen from "./screens/admin/UserListScreen.jsx";
import ProductListScreen from "./screens/admin/ProductListScreen.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import OrderListScreen from "./screens/admin/OrderListScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
      <Route path="/shipping" element={<ShippingScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/place-order" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/profile/" element={<ProfileScreen />} />
        <Route path="/success-screen" element={<SuccessScreen />} />
      </Route>

      {/*Admin Routes*/}
      <Route path="/" element={<AdminRoute />}>
        <Route path="/admin/users" element={<UserListScreen />} />
        <Route path="/admin/products" element={<ProductListScreen />} />
        <Route path="/admin/orders" element={<OrderListScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
