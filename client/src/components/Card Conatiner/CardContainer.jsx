import React from "react";
import Card from "../Card/Card";
import styles from "./CardContainer.module.css"

const CardContainer = ({image, title, diets, id})=>{

return (
    <>
    <div className={styles.conteiner}>
        <Card key={id} image={image} title= {title} diets={diets} id={id}/>
    </div>
    </>
)

}



export default CardContainer