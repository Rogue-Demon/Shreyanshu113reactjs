import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-6">


      <h1 className="text-5xl font-bold mb-4">
        Welcome
      </h1>


      <h2 className="text-3xl font-semibold mb-6">
        Hi, I am {portfolioData.name}
      </h2>

      <img
        src={portfolioData.image}
        alt={portfolioData.name}
        className="w-52 h-52 rounded-full object-cover border-4 border-blue-500 mb-6"
      />


      <p className="max-w-xl text-center text-gray-700 mb-8">
        {portfolioData.shortBio}
      </p>

      <Link
        to="/about"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Know More
      </Link>

    </div>
  );
}

export default Home;