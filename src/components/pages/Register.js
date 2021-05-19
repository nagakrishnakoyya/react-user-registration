import { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useValidation from "../common/useValidation";
import RegisterForm from "./RegisterForm";

const Register = ({ setAuth }) => {
  //Initial state
  const initialState = {
    fullName: "",
    username: "",
    email: "",
    password: "",
    cf_password: "",
  };
  // State
  const [data, setData] = useState(initialState);
  const [showPwd, setShowPwd] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // Custom hook
  const {
    errorMsg: errors,
    setErrors,
    isValidate,
    pwdStrenth,
    validatePasswordStrength,
  } = useValidation(data);
  const histoty = useHistory();
  const token = uuidv4();
  // Update state
  const updateInputValues = (e) => {
    const { name, value, id } = e.target;
    setData({ ...data, [name]: value });
    if (id === "password") {
      validatePasswordStrength(value);
    }
    setErrors({});
  };

  // onBlur
  // const validateRegisterDetails = () => {
  //   isValidate();
  // };

  // Register method
  const registerHandler = () => {
    const user = {
      fullName: data.fullName,
      username: data.username,
      email: data.email,
    };
    const isValid = isValidate();
    if (isValid) {
      setAuth(true);
      localStorage.setItem("access_token", token);
      localStorage.setItem("user", JSON.stringify(user));
      histoty.push("/home");
    }
  };
  // Password show & hide
  const passwordShowHide = () => {
    setShowPwd(!showPwd);
  };
  // Password strength show & hide
  const showPasswordStrength = () => {
    setShowInfo(!showInfo);
  };

  const registerFormProps = {
    data,
    showPwd,
    showInfo,
    errors,
    updateInputValues,
    registerHandler,
    passwordShowHide,
    isValidate,
    showPasswordStrength,
    pwdStrenth,
  };

  console.log("pwdStrenth", pwdStrenth);
  // JSX
  return (
    <>
      <RegisterForm {...registerFormProps} />
    </>
  );
};

export default Register;
