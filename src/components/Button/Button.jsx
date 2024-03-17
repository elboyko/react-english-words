
import style from "./Button.module.css"
import { useState } from "react"


function Button() {
   const [translate, setTranslate] = useState(false)

   function showTranslate() {
      setTranslate(true)
   }


   return (
      <>
         <p >Перевести</p>

      </>
   )
}

export default Button
