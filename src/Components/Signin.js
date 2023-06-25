import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signin = ({ setLogin, login }) => {
  const navigate = useNavigate();
  let password = useRef(null);
  const checkpass = () => {
    if (password.current.value === "s0l0") {
      setLogin(true);
    }
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      {!login ? (
        <>
          <h1>Signin</h1>
          <h1>ENTER PASSWORD</h1>
          <input
            type="password"
            className="border-2"
            ref={password}
            onChange={() => {
              checkpass();
            }}
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4">
          <button
            className="border-2 border-black p-2 px-3 rounded-md bg-orange-400 hover:bg-orange-200"
            onClick={() => {
              navigate("/main");
            }}
          >
            Make GST bill
          </button>
          <button
            className="border-2 border-black p-2 px-3 rounded-md bg-yellow-400 hover:bg-yellow-200"
            onClick={() => {
              navigate("/non-gst");
            }}
          >
            Make Non-GST bill
          </button>
        </div>
      )}
    </div>
  );
};

export default Signin;
