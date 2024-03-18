import React, { useState } from "react";
import style from "./WordInput.module.css"
import pensil from "../../assets/pensil.svg";
import deleteWord from "../../assets/delete.svg";
import ok from "../../assets/ok.svg";
import close from "../../assets/close.svg";
function WordInput({ english, transcription, russian }) {
   const [isEditWord, setIsEditWord] = useState(false)

   const handleEditWord = () => {
      setIsEditWord(true)
   }

   return (
      <div className={style.card}>
         {isEditWord ? (
            <>
               <input className={style.input} defaultValue={english} />
               <input className={style.input} defaultValue={transcription} />
               <input className={style.input} defaultValue={russian} />
               <div className="btns">
                  <button className={style.btn_ok}><img src={ok} alt="add" /></button>
                  <button
                     className={style.btn_close}
                     onClick={() => setIsEditWord(false)}
                  >
                     <img src={close} alt="close" />
                  </button>
               </div>
            </>
         ) : (
            <>
               <div className={style.item}>{english}</div>
               <div className={style.item}>{transcription}</div>
               <div className={style.item}>{russian}</div>
               <div className="btns">
                  <button className={style.btn_edit} onClick={handleEditWord}>
                     <img src={pensil} alt="edit" />
                  </button>
                  <button className={style.btn_delete}> <img src={deleteWord} alt="delete" /></button>
               </div>
            </>
         )}
      </div>
   );
};

export default WordInput;
