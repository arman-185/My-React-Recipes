import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  return (
    <div className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((recipe) => (
        <div
          key={recipe.id}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10"
        >
          <img
            src={recipe.file}
            alt={recipe.title}
            className="h-48 w-full object-cover"
          />

          <div className="p-5">
            <span className="text-xs text-red-400">{recipe.catagory}</span>

            <h1 className="mt-1 text-xl font-semibold">{recipe.title}</h1>

            <p className="mt-2 line-clamp-2 text-sm text-gray-400">
              {recipe.description}
            </p>

            <button className="mt-4 rounded-lg bg-red-400 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-red-500">
              View Recipe
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
