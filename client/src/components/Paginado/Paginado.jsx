import React from "react";
import style from "./Paginado.module.css"

const Paginado = ({recipePerPage, allRecipes, paginado })=>{

const pageNumbers = [];

for(let i = 0; i<=Math.ceil(allRecipes/recipePerPage-1); i++){
    pageNumbers.push(i+1)
}

return (
    <nav>
        <div >
            { pageNumbers && pageNumbers.map(num => {
               return <div className={style.div}> <button key={num}  onClick={()=>paginado(num)} className={style.paginado}> {num} </button> </div>
            }) }
        </div>
    </nav>
  )

        }



export default Paginado;


