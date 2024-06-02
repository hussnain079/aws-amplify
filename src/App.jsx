import "@aws-amplify/ui-react/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("./Login/Login"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
import { Amplify } from 'aws-amplify';

import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const user = await Amplify.currentAuthenticatedUser();
      setUser(user);
    } catch (err) {
      setUser(null);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          {user ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
