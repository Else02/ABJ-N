import styles from "../styles/results3.module.css"

function results3() {
    return (
      <div className={`${styles.question}`}>
          <h1>B-Feb-2021   -  Question</h1> <br/>
          <p>1- What is your name</p> 
          <form className={`${styles.answer}`}>
                 <input type={"radio"} name="question" value={"Answer 1"} /> <span>Answer 1</span> <br/>
                 <input type={"radio"} name="question" value={"Answer 2"}/> <span>Answer 2</span> <br/>
                 <input type={"radio"} name="question" value={"Answer 3"}/> <span>Answer 3 </span> <br/>
          </form>
          <p>2- What is your other name</p> 
          <form className={`${styles.answer}`}>
                 <input type={"radio"} name="question" value={"Answer 1"} /> <span>Answer 1</span> <br/>
                 <input type={"radio"} name="question" value={"Answer 2"}/> <span>Answer 2</span> <br/>
                 <input type={"radio"} name="question" value={"Answer 3"}/> <span>Answer 3 </span> <br/><br/><br/>
                 <input type={"Submit"} className={`${styles.btn}`}/>
          </form>
      </div>
    );
  }

export default results3