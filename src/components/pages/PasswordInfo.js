import React from "react";

const PasswordInfo = ({
  passwordShowHide,
  showPwd,
  showPasswordStrength,
  showInfo,
  pwdStrenth,
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
          <li className={pwdStrenth.isCapital ? "completed" : ""}>
            One capital letter
          </li>
          <li className={pwdStrenth.isSmall ? "completed" : ""}>
            One small letter
          </li>
          <li className={pwdStrenth.isSpecialChar ? "completed" : ""}>
            One special character
          </li>
          <li className={pwdStrenth.isNumber ? "completed" : ""}>
            One number{" "}
          </li>
          <li className={pwdStrenth.isLength6 ? "completed" : ""}>
            Minimum 6 characters{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordInfo;
