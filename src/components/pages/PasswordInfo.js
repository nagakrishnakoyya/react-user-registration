import React from "react";

const PasswordInfo = ({
  passwordShowHide,
  showPwd,
  showPasswordStrength,
  showInfo,
}) => {
  return (
    <div className="pwd-info">
      <small
        className="pwd-show"
        onClick={passwordShowHide}
        title={showPwd ? "Hide password" : "Show password"}
      >
        <i className={showPwd ? "fas fa-eye-slash" : "fas fa-eye"}></i>
      </small>
      <small
        className="info-icon"
        onClick={showPasswordStrength}
        title="Password strength"
      >
        <i className="fas fa-info"></i>
      </small>
      <div className={showInfo ? "info show" : "info"}>
        <b>Password should be contain:</b>
        <ul>
          <li>One capital letter</li>
          <li>One small letter</li>
          <li>One special character</li>
          <li>One number </li>
          <li>Minimum 6 characters </li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordInfo;
