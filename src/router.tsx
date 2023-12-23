import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Car from "./pages/Car";
import Bike from "./pages/Bike";
import Profile from "./pages/Profile";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./utility/ProtectedRoute";

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
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/car"
            element={
              <ProtectedRoute>
                <Car />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bike"
            element={
              <ProtectedRoute>
                <Bike />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
