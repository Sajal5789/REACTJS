
import styles from "./Navigation.module.css";

const Navigation =()=>{
  return(
    
   <nav className={`${styles.navigation}   `}>
    <div className="logo">
<img src="/public/Frame 2 1.png" alt="BRAND-LOGO"></img>

      </div>

      <div>
        <ul>
         <li>HOME</li> 
         <li>CONTACT</li> 
<li>ABOUT</li>


        </ul>
      </div>
  </nav>

  )
}
export default Navigation