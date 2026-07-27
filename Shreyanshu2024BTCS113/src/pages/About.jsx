import Navbar from "../components/Navbar";
import AbtHero from "../components/AbtHero";
import portfolioData from "../data/portfolioData";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gray-100 px-5">
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-900 flex flex-col justify-center items-center">
         <img
        className="w-52 h-52 rounded-full object-cover border-2 border-black-500 mb-6 flex justify-center items-center"
        src={portfolioData.image}
      
      />
      <AbtHero bio={portfolioData.fullBio} />
      </div>
      </div>
    </>
  );
}

export default About;