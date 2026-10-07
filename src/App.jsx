import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
  <div className="px-10 py-5 w-full min-h-screen bg-gray-800 text-white font-thin">
    <Navbar></Navbar>
    <Mainroutes />
  </div>
  )
}

export default App
