import {
    GET_ALL_RECIPES,
    GET_RECIPE_BY_TITLE,
    RECIPE_DETAIL,
    GET_DIETS,
    FILTER_BY_DIET,
    ORDER_BY_NAME,
    FILTER_CREATED,
    ORDER_BY_HEALTH_SCORE,
    CREATE_RECIPE
} from "./actions";

const initialState ={
    recipes: [],
    allrecipesState: [],
    detail: [],
    diets: [],
}

const reducer = (state=initialState, action)=>{
    switch(action.type){

        case GET_ALL_RECIPES:
            return{
                ...state,
                recipes: action.payload,
                allrecipesState: action.payload
            };


        case GET_RECIPE_BY_TITLE:
            return{
                ...state,
                recipes: action.payload,
            };

    case RECIPE_DETAIL:
        return{
            ...state,
            detail: action.payload
        };

        case GET_DIETS:
            return{
                ...state,
                diets: action.payload,
            }

        case FILTER_BY_DIET:
            const allRecipes= state.allrecipesState
            const dietFilter = action.payload === 'all' ? allRecipes : allRecipes.filter(ele => ele.diets?.includes(action.payload))

            return{
            ...state,
            recipes: dietFilter,
            }

            case FILTER_CREATED:
                const copyRecipes = state.allrecipesState
                const createdfilter = action.payload === 'bdd' ? copyRecipes.filter(el => el.createdByDb) : copyRecipes.filter(el => !el.createdByDb)
                return{
                    ...state,
                    recipes: action.payload === 'all' ? state.allrecipesState : createdfilter
                }
        
            case ORDER_BY_NAME:
                const sortedRecipes = [...state.recipes];
                const sortArr = action.payload === "asc"
                  ? sortedRecipes.sort(function (a, b) {
                      if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                      }
                      if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                      }
                      return 0;
                    })
                  : sortedRecipes.sort(function (a, b) {
                      if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return -1;
                      }
                      if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return 1;
                      }
                      return 0;
                    });
                  return { 
                    ...state, 
                    recipes: sortArr 
                };

            case ORDER_BY_HEALTH_SCORE:
                const copyState = [...state.recipes]
                const orderHS = action.payload === 'des'? copyState.sort((a, b) => b.healthScore - a.healthScore)
                : copyState.sort((a, b) => a.healthScore - b.healthScore)
                 return { 
                    ...state, 
                    recipes: orderHS 
                };

            
            case CREATE_RECIPE:
                    return {
                        ...state
                    };

            

              
        default:
            return { ...state };
    }

}




export default reducer;




