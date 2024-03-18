import React from "react";
import ErrorImage from "../../assets/errorImage.png"
import style from "./Error_404.module.css";


function Error_404() {
   return (
      <div className={style.card}>
         <div className={style.flex}>
            <span className={style.title}>4</span> <img className={style.image} src={ErrorImage}></img><span className={style.title}>4</span></div>
         <h1 className={style.subtitle}>Страница не найдена</h1>
      </div>
   );
}
export default Error_404;