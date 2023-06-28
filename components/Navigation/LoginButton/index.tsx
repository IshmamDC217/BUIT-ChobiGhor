import {useState} from "react";
import LoginForm from "./LoginForm";
import styles from "./styles.module.css";

function LoginButton () {
  let [isVisible, setIsVisible] = useState(false)
  console.log(isVisible)
  return (
  <div className="login-container">
    <button
      className={styles.directButton}
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
