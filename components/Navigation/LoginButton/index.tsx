import {useState} from "react";
import LoginForm from "./LoginForm";
import styles from "./styles.module.css";

interface ILoginButton { isDesktopComponent: boolean };
function LoginButton ({ isDesktopComponent } : ILoginButton) {
  const [isVisible, setIsVisible] = useState(false)
  const buttonClass = styles.directButton.concat(isDesktopComponent
    ? ` ${styles.desktop}`
    : ` ${styles.mobile}`);

  return (
  <div className="login-container">
    <button
      className={buttonClass}
      onClick={(e) => {
        e.preventDefault();
        setIsVisible(true);
      }}
    > Login </button>
    <LoginForm isVisible={isVisible} setIsVisible={setIsVisible} />
  </div>
  )
}

export default LoginButton;
