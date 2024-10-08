import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   let auth;
  //   try {
  //     auth = JSON.parse(user).email;
  //     navigate("/");
  //   } catch (err) {}
  // }, []);
  const switchLogSign = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSign = async () => {
    console.log(name, email, password);
    // JSON.stringify() is a method in JavaScript used to convert a JavaScript object or value into a JSON string.
    // JSON.parse() is a method in js used to convert a JSON string into js object

    if (isSignUp) {
      const result = await fetch("https://greenpath-learning-web.onrender.com/register", {
        method: "Post",
        body: JSON.stringify({ name: name, email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(result)
      const data = await result.json();
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      // cookie.setItem("user",JSON.stringify(data))
      navigate("/");
    }

    if (!isSignUp) {
      const result = await fetch("https://greenpath-learning-web.onrender.com/login", {
        method: "post",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      // console.log(data)
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    }
  };

  return (
    <div className="m-auto w-1/2 bg-gray-100 my-10 z-[10]">
      <div className="my-10">
        <h1 className="text-xl font-semibold m-7 pt-7">
          {isSignUp ? "Sign Up" : "Login"}
        </h1>
        <div className="m-7 cursor-pointer" onClick={switchLogSign}>
          {isSignUp
            ? "Already have an account ? Login"
            : "Create a new account? Click"}
        </div>
        {isSignUp ? (
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] border-black p-1 m-7 block"
            placeholder="Enter your name"
            type="text"
          />
        ) : (
          <div></div>
        )}
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-1 m-7 block"
          placeholder="Enter your email"
          type="email"
        />
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-1 m-7 block"
          password="Enter your password"
          type="password"
        />
        <button onClick={handleSign} className="bg-black text-white p-1 m-7 ">
          {isSignUp ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Sign;
