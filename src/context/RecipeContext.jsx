import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const recipeContext =  createContext(null);

const  RecipeContext = (props) => {
    const [data, setdata] = useState([])
    console.log(data)
  return (
    <recipeContext.Provider value={{data, setdata}}>
        {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext
