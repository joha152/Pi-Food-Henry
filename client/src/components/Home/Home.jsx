import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, filterByDiet, orderByName, filterCreated, orderByHealthScore} from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import Paginado from "../Paginado/Paginado";
import style from "./Home.module.css"
import SearchBar from "../Search bar/SearchBar"
import CardContainer from "../Card Conatiner/CardContainer";
import img from "../../img/comida.jpg"


const Home = ()=> {

    const dispatch = useDispatch();
    const allRecipes = useSelector((state)=> state.recipes)

    const [currentPage, setCurrentPage] = useState(1);
    const [recipePerPage, setRecipePerPage] = useState(9);
    const indexOfLastRecipe = currentPage * recipePerPage; 
    const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage; 
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe) // array que tiene las recetas que se muestran por pagina

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
    

    useEffect(()=>{
        dispatch(getAllRecipes())
    }, [dispatch])

   const handleClick = (e)=>{
    dispatch(getAllRecipes(e))
   }

const handleFilterDiet = (event)=>{
dispatch(filterByDiet(event.target.value))
    setCurrentPage(1)
}


const handleOrderByName =(e)=>{
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
}


const handleFilterCreated = (e)=>{
    dispatch(filterCreated(e.target.value))
    setCurrentPage(1)
}

const handleOrderByHs =(e)=>{
    dispatch(orderByHealthScore(e.target.value))
    setCurrentPage(1)
}

const handleNextPage = () => {
    const totalPages= Math.ceil(allRecipes.length / recipePerPage)
    if(currentPage < totalPages)
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

 return (
<>
<div className={style.contenedor}>

<div>
    <NavBar/>
</div>

<div className={style.contImg}>
    <div className={style.contenidoSearch}>

<div className={style.name}>
    <h1>Welcome to Food App</h1>      
    <SearchBar/>
    </div>
    <img src={img} alt="comida" className={style.comida} />
</div>
</div>

<div>
    
</div>


<div className={style.divBtn}>
<button onClick={e=> {handleClick(e)}} className={style.button} >Reload recipes</button>
</div>


<div className={style.contenedorSelect}>

<div className={style.containerSelect}>
    <select onChange={handleOrderByName} className={style.selectWrapper}>
    <option value="">Order by name</option>
        <option value="asc">Order from A-Z</option>
        <option value="des">Order from Z-A</option>
    </select>
    </div>
    <div className={style.containerSelect}>
        <select onChange={handleOrderByHs} className={style.selectWrapper}>
        <option value="">Order by HealthScore</option>
        <option value="asc">From minor to major</option>
        <option value="des">From major to minor</option>
        </select>
    </div>
    <div className={style.containerSelect}>
        <select onChange={handleFilterDiet} className={style.selectWrapper}>
            <option value="">Filter by diet</option>
            <option value="all">All</option>
            <option value="gluten free">Gluten free</option>
            <option value="dairy free">Dairy free</option>
            <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole 30</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="fodmap friendly">Fodmap friendly</option>
        </select>
    </div>
    <div className={style.containerSelect}>
        <select onChange={handleFilterCreated} className={style.selectWrapper}>
            <option value="">Filter by origin</option>
            <option value="all">All</option>
            <option value="api">Recipes Api</option>
            <option value="bdd">Recipes created</option>
        </select>
    </div>
    </div>

        
    <Paginado    recipePerPage={recipePerPage}    allRecipes={allRecipes.length}    paginado={paginado}  />
        

    <div className={style.contpag}>
      <p className={style.name}>Actual page: {currentPage}</p>
    </div>
      <div className={style.btnPyN}>
      <button onClick={handlePrevPage} className={style.button}>Previous Page</button>
      <button onClick={handleNextPage} className={style.button}>Next Page</button>
    </div>
    
    <div className={style.card}>
        {
            currentRecipes?.map((r) => (
                <CardContainer key={r.id} title={r.title} image={r.image} diets={r.diets} id={r.id} className={style.card} />
                ))
                
            }
    </div>
            </div>
 

</>
 )
}




export default Home;