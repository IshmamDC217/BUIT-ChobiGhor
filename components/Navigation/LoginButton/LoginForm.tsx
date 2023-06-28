import styles from "./styles.module.css";

interface LoginFormParams { isVisible: boolean, setIsVisible: CallableFunction }
function LoginForm( { isVisible, setIsVisible } : LoginFormParams ) {
  let className = `${styles.loginForm} ${(isVisible ? styles.visible : styles.invisible)}`

  return (
    <form className={className}>
      <button
        className={styles.closeButton}
        onClick={(e) => {
          e.preventDefault();
          setIsVisible(false);
        }}
      > x </button>
      <LabelData />
      <button className={styles.loginFormButton}> Log In </button>
    </form>
  )
}

interface LabelDataParams { labelInfo: string, labelType: string }
function LabelData () {
  const inputFields: LabelDataParams[] = [
    { labelInfo: "Name", labelType: "text" },
    { labelInfo: "Password", labelType: "password" }
  ];
  
  const allFields = inputFields.map( ({labelInfo, labelType}) => {
    return (
      <label key={labelInfo} className={styles.labelData}>
        <span> {labelInfo}: </span>
        <input type={labelType} />
      </label>
    )
  })

  return <>{allFields}</>
}

export default LoginForm;

