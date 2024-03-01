import cat from "../../assets/cat.webp"
import Card from "../Card/Card"
import style from "./Main.module.css"
import { useState } from "react"


function Main() {
   const [active, setActive] = useState(false)
   function showCard() {
      setActive(!active)
   }

   return (
      <>
         <div className={style.inner}>
            <button onClick={showCard} className={style.go}>Давай начнем!</button>
            <div>
               <img className={style.image} src={cat} alt="cat" />
            </div>
         </div>
         {active ? <Card /> : ""}
      </>
   )
}

export default Main
