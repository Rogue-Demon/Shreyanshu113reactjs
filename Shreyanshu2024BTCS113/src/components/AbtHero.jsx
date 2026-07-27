function AbtHero(props) {
  return (
    <section className="max-w-4xl mx-auto mt-12 px-6">

      <h1 className="text-4xl font-bold mb-6 flex justify-center items-center">
        About Me
      </h1>

      <p className="text-lg leading-8 text-gray-700">
        {props.bio}
      </p>

    </section>
  );
}

export default AbtHero;