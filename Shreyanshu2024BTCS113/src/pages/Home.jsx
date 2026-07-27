import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";

function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-5">
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-md flex flex-col justify-center items-center">


      <h1 className="text-5xl font-bold mb-4">
        Welcome
      </h1>                                                                                                         


      <h2 className="text-3xl font-semibold mb-6">
        Hi, I am {portfolioData.name}
      </h2>

      <img
        className="w-52 h-52 rounded-full object-cover border-2 border-black-500 mb-6 flex justify-center items-center"
        src={portfolioData.image}
      
      />


      <p className="max-w-xl text-center text-gray-700 mb-8">
        {portfolioData.shortBio}
      </p>

      <Link
        to="/about"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
      >
        Know More
      </Link>

    </div>
    </div>
  );
}

export default Home;