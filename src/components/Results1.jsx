import styles from "../styles/results1.module.css"

function results1() {
    return (
        <div className={`${styles.message}`}>
        <form className={`${styles.form1}`}>
            <h6>You have not completed your fees</h6>
            <h6>Once you pay you will see the questions to solve</h6>
        </form>
        </div>
      
    );
  }

  export default results1