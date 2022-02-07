import styles from "../styles/results2.module.css"

function results2() {
    return (
      <div className={`${styles.container}`}>
          <form className={`${styles.forms}`}>
               <h1>Add student</h1>
               Name <br></br> <input type={"number"} name="phone number" maxLength={"9"} minLength={"9"} className={`${styles.search}`}></input> <br></br>
               Phone number<br></br> <input type={"number"} name="phone number" maxLength={"9"} minLength={"9"} className={`${styles.search}`}></input> <br></br>
               Password <br></br><input type={"password"} name="password" maxLength={"5"} className={`${styles.search}`}></input> <br></br><br></br>
               
          </form>
      </div>
    );
  }

  export default results2