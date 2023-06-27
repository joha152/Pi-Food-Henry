import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css"


const Card = ({image, title, diets, id, healthScore})=>{
return(
    <>
    <div className={style.contenedor}>
    <Link to={`/detail/${id}`}>
         <h1 className={style.name}>{title}</h1>
    </Link>
        <h2 className={style.name}> * {diets}</h2>
        <h2 className={style.name}> HealthScore: {healthScore}</h2>
        <img src={image} alt="img" className={style.img}/>
    </div>
    </>
)

};


export default Card;