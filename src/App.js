import { useEffect, useState } from "react";
import "./App.css";
import * as cognito from "./cognito.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Profile from "./Routes/Profile";
import Signup from "./Routes/Signup";
import Nav from "./Components/Nav";
import Confirm from "./Routes/Confirm";
import ForgetPassword from "./Routes/ForgetPassword";
import ResetPassword from "./Routes/ResetPassword";

function App() {
  const [user, setUser] = useState();
  // verify if theres any login user
  useEffect(() => {
    const userr = cognito.getCurrentUser();
    setUser(userr);
  }, []);

  async function doSomething() {
    const token = await cognito.getAccessToken();
    console.log(token); // 만약 나중에 api에 정보 보낼때 .. 토큰 필요해서 이렇게 얻어내는거임.. fetch('api url', headers: {authorizaiton:'bearer token})...
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/singup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
