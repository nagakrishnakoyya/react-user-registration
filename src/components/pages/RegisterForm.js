import React from "react";
import PasswordInfo from "./PasswordInfo";

const RegisterForm = (props) => {
  const {
    data,
    showPwd,
    showInfo,
    errors,
    updateInputValues,
    validateRegisterDetails,
    registerHandler,
    passwordShowHide,
    showPasswordStrength,
  } = props;
  const { fullName, username, email, password, cf_password } = data;
  return (
    <div className="Register-page center_content">
      <div>
        <div className="form-group">
          <label htmlFor="email">Full Name:</label>
          <input
            style={{ backgroundColor: errors.name ? "#f5c0c0" : "" }}
            type="text"
            className="form-control"
            placeholder="Enter full name"
            name="fullName"
            value={fullName}
            onChange={updateInputValues}
            onBlur={validateRegisterDetails}
          />
          {errors && <small style={{ color: "red" }}>{errors.fullName}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Username:</label>
          <input
            style={{ backgroundColor: errors.username ? "#f5c0c0" : "" }}
            type="text"
            className="form-control"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={updateInputValues}
            onBlur={validateRegisterDetails}
          />
          {errors && <small style={{ color: "red" }}>{errors.username}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            style={{ backgroundColor: errors.email ? "#f5c0c0" : "" }}
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={updateInputValues}
            onBlur={validateRegisterDetails}
          />
          {errors && <small style={{ color: "red" }}>{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            style={{ backgroundColor: errors.password ? "#f5c0c0" : "" }}
            type={showPwd ? "text" : "password"}
            className="form-control"
            placeholder="Enter password"
            name="password"
            id="password"
            value={password}
            onChange={updateInputValues}
            onBlur={validateRegisterDetails}
          />
          {errors && <small style={{ color: "red" }}>{errors.password}</small>}
        </div>

        <div className="form-group" style={{ position: "relative" }}>
          <label htmlFor="pwd">Confirm Password:</label>
          <input
            style={{ backgroundColor: errors.cf_password ? "#f5c0c0" : "" }}
            type={showPwd ? "text" : "password"}
            className="form-control"
            placeholder="Enter confirm password"
            name="cf_password"
            value={cf_password}
            onChange={updateInputValues}
            onBlur={validateRegisterDetails}
          />
          {errors && (
            <small style={{ color: "red" }}>{errors.cf_password}</small>
          )}
          <PasswordInfo
            passwordShowHide={passwordShowHide}
            showPwd={showPwd}
            showPasswordStrength={showPasswordStrength}
            showInfo={showInfo}
          />
        </div>
        <button className="btn btn-primary btn-block" onClick={registerHandler}>
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
