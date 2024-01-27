import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={user ?<Home />: <Register/>} />
          <Route path="/login" element={user ? redirect("/") : <Login />} />
          <Route path="/register" element={user ? redirect("/") : <Register />}  />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
