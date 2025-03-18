import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HeaderLayout from "./components/HeaderLayout";
import ProductsList from "./pages/ProductsList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HeaderLayout />}>
                        <Route path="/" element={<ProductsList />} />
                        <Route path="/product-detail/:id" element={<ProductDetails />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cart" element={<Cart />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
