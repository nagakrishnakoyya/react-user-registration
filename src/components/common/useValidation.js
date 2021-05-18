import { useState } from "react";

const useValidation = (data) => {
  const [errorMsg, setErrors] = useState({});

  // Email and password validation
  const isValidate = () => {
    if (!data?.fullName) {
      setErrors({ ...errorMsg, fullName: "fullName is required!" });
      return;
    }
    if (data?.fullName.length > 25) {
      setErrors({
        ...errorMsg,
        fullName: "fullName is not more than 25 characters!",
      });
      return;
    }

    if (!data?.username) {
      setErrors({ ...errorMsg, username: "username is required!" });
      return;
    }
    if (data?.username.includes(" ")) {
      setErrors({
        ...errorMsg,
        username: "username not contains empty space!",
      });
      return;
    }
    if (data?.username.trim().length < 6) {
      setErrors({
        ...errorMsg,
        username: "username is not less than 6 characters!",
      });
      return;
    }
    if (data?.username.trim().length > 15) {
      setErrors({
        ...errorMsg,
        username: "username is not more than 15 characters!",
      });
      return;
    }

    if (!data?.email) {
      setErrors({ ...errorMsg, email: "Email is required!" });
      return;
    }
    if (!validateEmail(data?.email)) {
      setErrors({ ...errorMsg, email: "Email is not valid!" });
      return;
    }

    if (!data?.password) {
      setErrors({ ...errorMsg, password: "Password is required!" });
      return;
    }
    if (data?.password !== data?.cf_password) {
      setErrors({
        ...errorMsg,
        cf_password: "Confirm Password is not matched!",
      });
      return;
    }

    if (data?.password.length < 6) {
      setErrors({
        ...errorMsg,
        password: "Password length should be more than 6 characters!",
      });
      return;
    }

    if (!validatePassword(data?.password)) {
      setErrors({ ...errorMsg, password: "Password strength does not match!" });
      return;
    }

    return true;
  };

  // Check email is valid or not
  function validateEmail(email) {
    const verify =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return verify.test(String(email).toLowerCase());
  }

  // Password strength
  function validatePassword(password) {
    const verify = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/;
    return verify.test(password);
  }

  return {
    errorMsg,
    setErrors,
    errCount: Object.keys(errorMsg).length,
    isValidate,
  };
};

export default useValidation;
