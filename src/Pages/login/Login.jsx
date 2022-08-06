import { useState } from "react";
import { Form } from "../../components/form/Form";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../store/slices/userSlice";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const formStructures = [
    {
      label: "USER NAME",
      inputType: "text",
      type: "input",
      value: userName,
      onChange: (event) => {
        setUserName(event.target.value.trimStart());
      },
    },
    {
      label: "PASSWORD",
      inputType: "password",
      type: "input",
      value: password,
      onChange: (event) => {
        setPassword(event.target.value.trimStart());
      },
    },
  ];
  const formButton = {
    type: "primary",
    text: "LOGIN",
    onClick: onLogin,
    disabled: false,
  };

  function onLogin(event) {
    event.preventDefault();
    if (userName === "" || password === "")
      return showError("All fields are compulsary.");

    showSuccess("logged in");

    // setTimeout(() => {
    navigate("/home", { replace: true });
    dispatch(logIn({ userName, password }));
    // }, 2000);
  }

  function showSuccess(message) {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function showError(message) {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <div>
      <ToastContainer />
      <Form formStructures={formStructures} formButton={formButton} />;
    </div>
  );
}
