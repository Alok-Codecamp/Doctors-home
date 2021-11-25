import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appoinment from "./pages/AppoinmentPage/Appoinment/Appoinment";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/HomePage/Home/Home";
import Login from "./pages/LoginPage/Login/Login";
import PrivateRoute from "./pages/LoginPage/PrivateRoute/PrivateRoute";
import Register from "./pages/LoginPage/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
            <Home >
            </Home>
         </Route>
         <PrivateRoute path="/appoinment">
          <Appoinment></Appoinment>
         </PrivateRoute>
         <PrivateRoute path="/dashboard">
           <Dashboard></Dashboard>
         </PrivateRoute>
         <Route path="/login">
          <Login></Login>
         </Route>
         <Route path="/register">
          <Register></Register>
         </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
