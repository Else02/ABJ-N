import styles from "../styles/login.module.css"

function login() {
    return (
      <div className={`${styles.container}`}>
          <form className={`${styles.forms}`}>
               <h1>Sign in</h1>
               Phone number<br></br> <input type={"number"} name="phone number" maxLength={"9"} minLength={"9"} className={`${styles.search}`}></input> <br></br>
               Password <br></br><input type={"password"} name="password" maxLength={"5"} className={`${styles.search}`}></input> <br></br><br></br>
               <input type={"button"} value={"Sign in"} className={`${styles.btn}`}></input>
          </form>
      </div>
    );
  }

  export default login