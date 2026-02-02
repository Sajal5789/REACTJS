import styles from "./Button.module.css"

const Button = (props) => {
  return (
    <div >
      <div>
      <button className={`${props.isOutline ? styles.outline_btn :styles.primary_btn}`}> 
        {props.text}{props.icon}
      </button>
   
      
       </div>
       </div>

  )
};

export default Button