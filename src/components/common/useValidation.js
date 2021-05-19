import { useState } from "react";

const useValidation = (data) => {
  const [errorMsg, setErrors] = useState({});
  const [pwdStrenth, setPwdStrenth] = useState({});

  // Email and password validation
  const isValidate = () => {
    if (!data?.fullName) {
      setErrors({ ...errorMsg, fullName: "Fullname is required!" });
      return;
    }
    if (data?.fullName.length > 25) {
      setErrors({
        ...errorMsg,
        fullName: "Fullname is not more than 25 characters!",
      });
      return;
    }

    if (!data?.username) {
      setErrors({ ...errorMsg, username: "Username is required!" });
      return;
    }
    if (data?.username.includes(" ")) {
      setErrors({
        ...errorMsg,
        username: "Username not contains empty space!",
      });
      return;
    }
    if (data?.username.trim().length < 6) {
      setErrors({
        ...errorMsg,
        username: "Username is not less than 6 characters!",
      });
      return;
    }
    if (data?.username.trim().length > 15) {
      setErrors({
        ...errorMsg,
        username: "Username is not more than 15 characters!",
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

    if (!data?.cf_password) {
      setErrors({ ...errorMsg, cf_password: "Confirm password is required!" });
      return;
    }
    if (data?.password !== data?.cf_password) {
      setErrors({
        ...errorMsg,
        cf_password: "Confirm Password is not matched!",
      });
      return;
    }

    return true;
  };

  const validatePasswordStrength = (password) => {
    let showPasswordStrengthObj = {
      isLength6: false,
      isCapital: false,
      isSmall: false,
      isNumber: false,
      isSpecialChar: false,
    };
    if (password.length > 5) {
      showPasswordStrengthObj.isLength6 = true;
    }

    if (/[A-Z]/g.test(password)) {
      showPasswordStrengthObj.isCapital = true;
    }

    if (/[a-z]/g.test(password)) {
      showPasswordStrengthObj.isSmall = true;
    }

    if (/[0-9]/g.test(password)) {
      showPasswordStrengthObj.isNumber = true;
    }

    if (/[!@#$&*]/g.test(password)) {
      showPasswordStrengthObj.isSpecialChar = true;
    }

    setPwdStrenth({ ...showPasswordStrengthObj });
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
    pwdStrenth,
    validatePasswordStrength,
  };
};

export default useValidation;
