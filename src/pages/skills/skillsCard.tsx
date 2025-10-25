const SkillCard = ({
  category,
  skillsList,
}: {
  category: string;
  skillsList: { name: string; icon: JSX.Element }[];
}) => (
  <div className="m-4 flex flex-col items-center gap-3">
    <h2 className="text-2xl font-semibold mb-2 ">{category}</h2>
    <div className="grid grid-cols-3 gap-4">
      {skillsList.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center">
          <div className="text-4xl mb-2">{skill.icon}</div>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCard;
