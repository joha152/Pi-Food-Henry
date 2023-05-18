import axios from "axios" ;

export const GET_ALL_RECIPES= "GET_ALL_RECIPES";
export const GET_RECIPE_BY_TITLE= "GET_RECIPE_BY_TITLE";
export const RECIPE_DETAIL = "RECIPE_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_BY_DIET= "FILTER_BY_DIET";
export const FILTER_CREATED ="FILTER_CREATED";
export const ORDER_BY_NAME= "ORDER_BY_NAME";
export const ORDER_BY_HEALTH_SCORE ="ORDER_BY_HEALTH_SCORE";



export const getAllRecipes = ()=>{
    return async function(dispatch){

        const json = await axios.get(("/recipes"))
        const data = json.data;
        
     return dispatch({type: GET_ALL_RECIPES, payload: data})
    }
}

//////////////////////////////////////////////////////////////////////////

export const getRecipeByTitle = (title)=>{
return async function(dispatch){
    try{
        const json = await axios.get(`/recipes?title=${title}`)
        const data = json.data;
        
        return dispatch({type: GET_RECIPE_BY_TITLE, payload: data})
    } catch(error){
        return alert("error")
    }
}

}

/////////////////////////////////////////////////////////////////////////////////////

export const recipeDetail = (id)=>{
    return async function(dispatch){
        try{

            const json = await axios.get(`/recipes/${id}`);
            const data = json.data;
            return dispatch({type: RECIPE_DETAIL, payload: data})
        }catch(error){
            return alert(error.message)
        }

    }

}

/////////////////////////////////////////////////////////////////////

export const getDiets = ()=>{
    return async function(dispatch){
        const json= await axios.get("/diets")
        const data= json.data;
        return dispatch({
            type: GET_DIETS,
            payload: data
        })
        
    }
};

////////////////////////////////////////////////////////////////////

export const createRecipe = (payload)=>{
    return async function(dispatch){
        
     const data = await axios.post("/recipes", payload)
         return data;   
    }

};

////////////////////////////////////////////////////////////

export const filterByDiet = (payload)=>{
    
return{
    type: FILTER_BY_DIET,
    payload
}
}

////////////////////////////////////////////////////////

export const filterCreated = (payload)=>{
   
    return{
        type: FILTER_CREATED,
        payload
    }
}

///////////////////////////////////////////////////

export const orderByName = (payload)=>{
    
return {
    type: ORDER_BY_NAME,
    payload
}
}

////////////////////////////////////////////////

export const orderByHealthScore = (payload)=>{
    return{
        type: ORDER_BY_HEALTH_SCORE,
        payload
    }
}
