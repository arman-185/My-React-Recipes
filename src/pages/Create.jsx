import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";

const Create = () => {

  const {data,setdata} = useContext(recipeContext)
  

  const { register, handleSubmit ,reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data,recipe])
    reset()
  };

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl md:p-8">

      <h1 className="mb-2 text-3xl font-semibold">Create Recipe</h1>
      <p className="mb-8 text-sm text-gray-400">
        Add your recipe and share it with others.
      </p>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-5"
      >

        <input
          {...register("file")}
          type="url"
          placeholder="Image URL"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400/50 focus:bg-white/10"
        />

        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400/50 focus:bg-white/10"
        />

        <small className="block text-sm text-red-400">
          This is how the error is shown
        </small>

        <textarea
          {...register("description")}
          placeholder="Recipe Description"
          rows="4"
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400/50 focus:bg-white/10"
        />

        <select
          {...register("catagory")}
          className="w-full rounded-xl border border-white/10 bg-gray-900 px-4 py-3 text-gray-300 outline-none transition focus:border-purple-400/50"
        >
          <option value="cat-1">Category 1</option>
          <option value="cat-2">Category 2</option>
          <option value="cat-3">Category 3</option>
        </select>

        <textarea
          {...register("Ingredients")}
          placeholder="Recipe Ingredients"
          rows="5"
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400/50 focus:bg-white/10"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-red-400 px-5 py-3 font-medium text-gray-900 transition hover:bg-red-500 active:scale-[0.98]"
        >
          Save Recipe
        </button>

      </form>
    </div>
  );
};

export default Create;