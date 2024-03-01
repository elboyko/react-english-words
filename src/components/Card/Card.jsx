import style from "./Card.module.css"
import { useState } from "react"
import words from "./letters.json"

const w =
{
   "id": "15272",
   "english": "dog",
   "transcription": "[dɒg]",
   "russian": "собака",
   "tags": "Animals",
   "tags_json": "[\"Animals\"]"
}

function Card() {
   const [translate, setTranslate] = useState(false)

   function showTranslate() {
      setTranslate(true)
   }

   let marking = <button className={style.button} onClick={showTranslate}>Перевести</button>
   if (translate) {
      marking = <p className={style.russian}>"{w.russian}"</p>
   }
   return (
      <>
         <div className={style.card}>
            <h2 className={style.text}>{w.english}</h2>
            <p className={style.transcription}>{w.transcription}</p>
            {/* <button onClick={showTranslate} className={`${style.button}  ${translate ? style.translate : ""}`}>Перевести</button>
            // {translate ? <p className={style.russian}>"{w.russian}"</p> : ""} */}
            {marking}
         </div>
         <div className={style.box}>
            <button className={style.next}>Следующее слово</button>
            <button className={style.done}>Выучено</button>
         </div>
      </>
   )
}

export default Card