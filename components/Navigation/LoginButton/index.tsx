import {useState} from "react";
import LoginForm from "./LoginForm";
import styles from "./styles.module.css";

interface ILoginButton { isDesktopComponent: boolean };
function LoginButton ({ isDesktopComponent } : ILoginButton) {
  const [isVisible, setIsVisible] = useState(false)
  const componentDevice = isDesktopComponent
    ? ` ${styles.desktop}`
    : ` ${styles.mobile}`;

  return (
  <div className={"login-container" + componentDevice}>
    <button
      className={styles.directButton + componentDevice}
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
