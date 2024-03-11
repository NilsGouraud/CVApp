const DisplayExperiences = (experiences) => {
  let count = 0;

  return (
    <div className="experience">
      <h1>Professional experience</h1>
      {experiences.map((exp) => {
        return (
          <div className="paragraphExp" key={count++}>
            <div className="date">
              {exp.beginning}-{exp.end}
            </div>
            <div className="structure">{exp.structure}</div>
            <div className="title">{exp.title}</div>
            <div className="description">{exp.description}</div>
          </div>
        );
      })}
    </div>
  );
};
export default DisplayExperiences;
