import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Custom from "./pages/Custom";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Support from "./pages/Support";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useSelector } from "react-redux";
import store, { RootStore } from "./store";
import { useEffect } from "react";
import { getTotals } from "./store/modules/cart";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./wrapperRoutes";


export default function Routes() {
  const { cartItems } = useSelector((state: RootStore) => state.cart)
    useEffect(() => {
        store.dispatch(getTotals())
    }, [cartItems])
  return (
    <BrowserRouter>
    <ToastContainer hideProgressBar={true} limit={1}/>
    <ScrollToTop />
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personalize" element={<Custom />} />
        <Route path="/produto" element={<Product />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/suporte" element={<Support />} />
        <Route path="/*" element={<NotFoundPage />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
