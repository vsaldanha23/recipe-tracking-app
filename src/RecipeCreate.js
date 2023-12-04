import React, { useState } from "react";
import "./App.css";

function RecipeCreate({createRecipe}) {
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);


  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({name, cuisine,photo,ingredients,preparation})
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };


  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr> 
            <td>
              <label htmlFor="name">             
                  <input type="text" id="name" name="name" onChange={handleNameChange} value={name} placeholder="Name"/>              
              </label>            
              </td>
              <td>
              <label htmlFor="cusine">
                  <input type="text" id="cuisine" name="cuisine" onChange={handleCuisineChange} value={cuisine} placeholder="Cuisine"/>
              </label>
              </td>
              <td>
              <label htmlFor="photo">
                  <input type="url" id="photo" name="photo" onChange={handlePhotoChange} value={photo} placeholder="URL"/>           
              </label>
              </td>
              <td>
              <label htmlFor="ingredients">
                <textarea id="ingredients" name="ingredients" onChange={handleIngredientsChange} value={ingredients} placeholder="Ingredients"/>
              </label>
              </td>
              <td>
              <label htmlFor="preparation">
                <textarea id="preparation" name="preparation" onChange={handlePreparationChange} value={preparation} placeholder="Preparation"/>
              </label>
              </td>
            <td>
              <button type="submit">Create</button>
            </td>

          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
