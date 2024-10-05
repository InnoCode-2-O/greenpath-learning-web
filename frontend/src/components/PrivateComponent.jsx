import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const user = localStorage.getItem("user");
  let auth;
  try{
       auth = JSON.parse(user).email;
  } catch(err){
    
  }
  return auth ? <Outlet /> : <Navigate to={"/sign"} />;
};

export default PrivateComponent;
