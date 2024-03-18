import React from "react";
import WordInput from "../WordInput/WordInput";
import wordsData from "../Card/letters.json";
import style from "./WordList.module.css";

const WordList = () => {
   return (
      <div className={style.container}>
         {wordsData.map((word, id) => (
            <WordInput
               key={id}
               english={word.english}
               transcription={word.transcription}
               russian={word.russian}
            />
         ))}
      </div>
   );
};

export default WordList;