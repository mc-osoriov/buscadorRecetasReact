import React, { useState } from "react";
import axios from "axios";

function Buscar() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e0bdc9565d104e2ea5a80893da61d2be&query=${query}&addRecipeInformation=true`;
    const response = await axios.get(url);
    setRecipes(response.data.results);
    setQuery("");
  };

  const handleSelectRecipe = async (id) => {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=e0bdc9565d104e2ea5a80893da61d2be`;
    const response = await axios.get(url);
    setSelectedRecipe(response.data);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  if (selectedRecipe) {
    return (
      <div className="menu-item bg-white shadow-on-hover">
        <img className="mt-5" src={selectedRecipe.image} alt={selectedRecipe.title} />
        <div class="menu-item-content p-4">
        <h2>{selectedRecipe.title}</h2>
       
        
        <div dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions }} />
        </div>
        <button className="btn btn-secondary mb-5" onClick={handleBack}>Volver a la lista de recetas</button>
      </div>
    );
  }

  return (
    <section id="buscar" className="bg-light">
      <div className="container">
      <div class="row">
        <div className="col-12 intro-text">
          <h1>Busca tus platillos</h1>
          <p>Tenemos una gran variedad de recetas que te van a encantar. </p>
          <div className="h-search-form mt-4">
            <form onSubmit={handleSubmit}>

              <input type="search" name="search" placeholder="Busca un platillo" value={query} onChange={handleChange} />
              <button className="btn btn-secondary" type="submit">Buscar</button>

            </form>
            <ul>
              <div className="row gy-4 mt-4">


                {recipes.map((recipe) => (

                  <div className="menu-item bg-white shadow-on-hover" key={recipe.id}>

                    <img className="mt-4" src={recipe.image} alt={recipe.title} />
                    <div class="menu-item-content p-4 mt-4">
                      <h2>{recipe.title}</h2>
                      <button className="view-button btn btn-secondary" onClick={() => handleSelectRecipe(recipe.id)}>Ver Receta Completa</button>
                    </div>

                  </div>
                ))}

              </div>

            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Buscar;