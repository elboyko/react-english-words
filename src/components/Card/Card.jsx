import style from "./Card.module.css"
import React, { useState } from "react"

function Card(props) {
   const { english, transcription, russian } = props;
   const [translate, setTranslate] = useState(false)

   function showTranslate() {
      setTranslate(!translate)
   }
   return (
      <>
         <div className={style.card}>
            <h2 className={style.text}>{english}</h2>
            <p className={style.transcription}>{transcription}</p>

            {translate ?
               <p className={style.russian}>"{russian}"</p> : <button onClick={showTranslate} className={`${style.button}  ${translate ? style.translate : ""}`}>Перевести</button>
            }
         </div>
      </>
   )
}

export default Card