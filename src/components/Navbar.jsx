import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 rounded-4xl text-2xl bg-white/5 p-2 backdrop-blur-md">
      <NavLink
        className={(e) =>
          `rounded-xl px-5 py-2 transition ${
            e.isActive
              ? "bg-white/10 text-red-400"
              : "text-gray-400 hover:text-white"
          }`
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={(e) =>
          `rounded-xl px-5 py-2 transition ${
            e.isActive
              ? "bg-white/10 text-red-400"
              : "text-gray-400 hover:text-white"
          }`
        }
        to="/recipes"
      >
        Recipes
      </NavLink>

      <NavLink
        className={(e) =>
          `rounded-xl px-5 py-2 transition ${
            e.isActive
              ? "bg-white/10 text-red-400"
              : "text-gray-400 hover:text-white"
          }`
        }
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={(e) =>
          `rounded-xl px-5 py-2 transition ${
            e.isActive
              ? "bg-white/10 text-red-400"
              : "text-gray-400 hover:text-white"
          }`
        }
        to="/create"
      >
        Create
      </NavLink>
    </div>
  );
};

export default Navbar;