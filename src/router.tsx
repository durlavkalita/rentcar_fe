import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import LoginPage from "./pages/Auth";
import Car from "./pages/Car";

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet /> {/* nested routes render here */}
    </>
  );
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/demo" element={<Home />} />
          <Route path="/car" element={<Car />} />
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
