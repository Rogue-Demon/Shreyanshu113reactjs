import { useState } from "react";
import Navbar from "../components/Navbar";
import portfolioData from "../data/portfolioData";

function Contact() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gray-100 px-5">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
      <div className="max-w-xl mx-auto mt-12">

        <h1 className="text-4xl font-bold mb-8">
          Contact Me
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <input
            type="tel"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Send
          </button>

        </form>

        {isSubmitted && (

          <div className="mt-10 bg-green-100 border border-green-400 p-5 rounded">

            <h2 className="text-2xl font-bold text-green-700">
              Hello {name},
            </h2>

            <p className="mt-2">
              Your mail has been successfully sent.
            </p>

            <p className="mt-2">
              {portfolioData.name} will contact you soon!
            </p>

          </div>

        )}

      </div>
      </div>
      </div>
    </>
  );
}

export default Contact;