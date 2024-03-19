import cat from "../../assets/cat.webp"
import CardSlider from "../CardSlider/CardSlider"
import style from "./Main.module.css"
import { useState } from "react"
import WordList from "../WordList/WordList"
import { Link } from "react-router-dom"
function Main() {
   const [active, setActive] = useState(false)
   function showCard() {
      setActive(!active)
   }
   const [showList, setShowList] = useState(false)
   function showListItem() {
      setShowList(!showList)
   }
   return (
      <>
         <div className={style.inner}>
            <div className={style.box}>
               <Link onClick={showCard} className={style.link} to={'/cards'}>Карточки!</Link>
               <Link onClick={showListItem} className={style.link} to={'/item'}>Таблица слов!</Link>
            </div>
            <div>
               <img className={style.image} src={cat} alt="cat" />
            </div>
         </div>
         {active ? <CardSlider /> : ""}
         {showList ? <WordList /> : ""}
      </>
   )
}

export default Main
