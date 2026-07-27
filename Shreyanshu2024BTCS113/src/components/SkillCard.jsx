function SkillCard(props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5">

      <h2 className="text-2xl font-bold mb-4">
        {props.title}
      </h2>

      <div className="flex flex-wrap gap-3">

        {props.items.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}

export default SkillCard;