function DisplayEducation(education) {
  let count = 0;
  return (
    <div className="education">
      <h1>Education</h1>

      {education.map((ed) => {
        return (
          <div className="paragraphEd" key={count++}>
            <div className="date">
              {ed.beginning}-{ed.end}
            </div>
            <div className="structure">{ed.structure}</div>
            <div className="title">{ed.title}</div>
          </div>
        );
      })}
    </div>
  );
}
export default DisplayEducation;
