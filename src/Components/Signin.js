import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signin = ({ setLogin }) => {
  const navigate = useNavigate();
  let password = useRef(null);
  const checkpass = () => {
    if (password.current.value === "s0l0") {
      setLogin(true);
      navigate("/main");
    }
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1>Signin</h1>
      <h1>ENTER PASSWORD</h1>
      <input
        type="password"
        className="border-2"
        ref={password}
        onChange={() => {
          checkpass();
        }}
      ></input>
    </div>
  );
};

export default Signin;
