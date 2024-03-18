import react from "react"
import style from "./Header.module.css"
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom"
function Header() {

   return (
      <>
         <div className={style.header}>
            <div className={style.image} ><Link to={'/'}><img src={Logo} alt="logo" /></Link></div>
            <h1 className={style.title}>Изучаем английский легко!</h1>
            <Link to={'/'} className={style.header_link}>На главную</Link>
         </div>
      </>
   )
}

export default Header
