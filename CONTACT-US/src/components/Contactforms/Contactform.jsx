import Button from "../button/Button";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import styles from "./Contactform.module.css";
const Contactform = () => {
  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text="VIA SUPPORT CHAT" icon= {<IoIosCall fontSize="24px" />}  />
     
      <Button text="VIA CALL" icon= {  < MdEmail fontSize="24px"/>}  />
      </div>
      <Button     isOutline={true} text="VIA EMAIL FORM" icon={<MdOutlineMessage fontSize="24px" />}  />
   
   <form>
    <div className={styles.form_control}>
    <label htmlFor="name">Name</label>
  <input type="text" name="name"></input>
  </div>
  <div className={styles.form_control}>
  <label htmlFor="email"  >E-Mail</label>
  <input type="email"></input>
  </div>
  <div className={styles.form_control}>
  <label htmlFor="text">TEXT</label>
  <textarea type="text" rows={8}  ></textarea>
  </div>
  
<div style={{
    display: "flex",
    justifyContent: "end",
}
  
}>
    <Button text="SUBMIT"/>
    </div>
   </form>


      </div>

      <div className="">
       <img  src="./Service 24_7-pana 1.svg" alt="contact-img" ></img>
      </div>
    </section>
  )
}

export default Contactform