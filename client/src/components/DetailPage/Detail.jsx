import React, {useEffect} from "react";
import { Link, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { recipeDetail } from "../../redux/actions";
import styles from "./Detail.module.css"



const Detail= ()=>{
    const params = useParams();
    const dispatch = useDispatch();
    
    const recipe = useSelector((state)=> state.detail)

    
    useEffect(()=>{
        dispatch(recipeDetail(params.id))
    },[dispatch,params.id]);

 

    return(
        <div className={styles.content}>
        <div>
             <Link to="/home">
        <button className={styles.button}>Home</button>
        </Link>

       <hr />

            {
                 recipe 
                  ? 
                 <div className={styles.contenedor}>
                 <h1 className={styles.title}>{recipe.title}</h1>
                 <img src={recipe.image} className={styles.img}/>
                 <hr />
                 <h2 className={styles.text}>Summary: {recipe.summary?.replace(/<[^>]*>/g, "")}</h2>
                 <hr />
                 <h2 className={styles.text}>Health Score: {recipe.healthScore}</h2>
                 <hr />
                 <h2 className={styles.text}>Instructions: {recipe.instructions?.replace(/<[^>]*>/g, "")}</h2>
                 <hr />
                 <h3 className={styles.text}>Diets: {recipe.diets && Array.isArray(recipe.diets) ?
                     recipe.diets.map(el => el.name).join(" ,") :
                     recipe.diets || "no se encontraron dietas"
                        }
                        </h3>
                 </div>
                : 
                <p>Loading</p>

              
            } 
    <hr />
       
        </div>
        
             </div>

    )

}





export default Detail;