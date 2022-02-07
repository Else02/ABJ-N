import styles from "../styles/results4.module.css"

function results4() {
    return (
      <div className={`${styles.form}`}>
      <form className={`${styles.box}`}>
          <form className={`${styles.quest}`}><h1>B-Feb-2021</h1> </form>
          <form className={`${styles.score}`}><h1>Score:  /40</h1></form>
      </form>
      </div>
    );
  }

export default results4