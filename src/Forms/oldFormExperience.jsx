import { useState } from "react";
import { Experience } from "../Experience";
function FormExperiences(experiences, setExperiences) {
  let [selected, setSelected] = useState(0);
  function addExperience() {
    return;
  }

  function createNewExperience() {
    setExperiences([...experiences, addExperience()]);
  }
  function displayInputs(exp) {
    return (
      <form action="" className="" key={exp.id}>
        <input
          id="beginningExp"
          name="beginning"
          type="number"
          min="1980"
          max="2024"
          placeholder="2020"
          defaultValue={exp.beginning}
        />
        <input
          id="endExp"
          name="end"
          type="number"
          min="1980"
          max="2024"
          placeholder="2023"
          defaultValue={exp.end}
        />
        <input
          id="titleExp"
          name="title"
          type="text"
          placeholder="occupation"
          defaultValue={exp.title}
        />
        <textarea
          id="descriptionExp"
          name="description"
          placeholder="describe your work there"
          defaultValue={exp.description}
        />
      </form>
    );
  }
  function displayDivs(exp) {
    return (
      <form
        id={experiences.length * exp.id}
        onClick={function () {
          setSelected(exp.id);
          console.log(exp.id);
        }}
      >
        Not selected
      </form>
    );
  }
  function displaySelected(exp) {
    if (selected === exp.id) {
      return displayInputs(exp);
    } else {
      return displayDivs(exp);
    }
  }
  return (
    <div>
      <label htmlFor="dropDownExp" className="dropDown">
        Experience
      </label>
      <input
        id="dropDownExp"
        type="text"
        onClick={() => {
          if (
            document
              .getElementsByClassName("formExperience")[0]
              .classList.contains("active")
          ) {
            document
              .getElementsByClassName("formExperience")[0]
              .classList.remove("active");
          } else {
            document
              .getElementsByClassName("formEducation")[0]
              .classList.remove("active");
            document
              .getElementsByClassName("formExperience")[0]
              .classList.add("active");
          }
        }}
      />
      <div className="formExperience active">
        {experiences.map((exp) => {
          displaySelected(exp);
        })}
        <input
          type="button"
          name="addExperience"
          onClick={createNewExperience}
          value="add"
        />
      </div>
    </div>
  );
}
export default FormExperiences;
