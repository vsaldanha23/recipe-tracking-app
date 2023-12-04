import React  from "react";
import "./App.css";

function RecipeView({ recipe, deleteRecipe }) {
  return (
      <tr>
        <td>{(recipe.name)}</td>
        <td>{(recipe.cuisine)}</td>
        <td>{(<img alt={recipe.photo} src={recipe.photo} />)}</td> 
        <td className="content_td"><p>{(recipe.ingredients)}</p></td>
        <td className="content_td"><p>{(recipe.preparation)}</p></td>
        <td>
          <button name="delete" onClick={deleteRecipe}>
            Delete
          </button>
        </td>
      </tr>
  );
}

export default RecipeView;
