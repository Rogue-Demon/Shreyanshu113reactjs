import SkillCard from "./SkillCard";

function SkillSection(props) {
  return (
    <section className="max-w-5xl mx-auto mt-12 px-6">

      <h1 className="text-4xl font-bold mb-8">
        My Skills
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {props.skills.map((category, index) => (
          <SkillCard
            key={index}
            title={category.title}
            items={category.items}
          />
        ))}

      </div>

    </section>
  );
}

export default SkillSection;