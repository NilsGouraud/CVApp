import { useState } from "react";
import Experience from "../Experience";
function FormExperiences(experiences, setExperiences) {
  let [selected, setSelected] = useState(-1);

  function handleChangeBeginning(exp, e) {
    let newExp = exp;
    newExp.beginning = e.target.value;
    exp = newExp;
    setExperiences(experiences.slice());
  }
  function handleChangeEnd(exp, e) {
    let newExp = exp;
    newExp.end = e.target.value;
    exp = newExp;
    setExperiences(experiences.slice());
  }
  function handleChangeStructure(exp, e) {
    let newExp = exp;
    newExp.title = e.target.value;
    exp = newExp;
    setExperiences(experiences.slice());
  }
  function handleChangeTitle(exp, e) {
    let newExp = exp;
    newExp.title = e.target.value;
    exp = newExp;
    setExperiences(experiences.slice());
  }
  function handleChangeDescription(exp, e) {
    let newExp = exp;
    newExp.description = e.target.value;
    exp = newExp;
    setExperiences(experiences.slice());
  }
  function createNewExperience() {
    let newId = -1;
    let taken = [];
    let newArray = experiences.slice();
    newArray.map((exp) => taken.push(exp.id));
    for (let i = 0; i <= experiences.length && newId == -1; i++) {
      console.log(i);
      if (!taken.includes(i)) {
        console.log("picking " + i);
        newId = i;
      }
    }
    setExperiences([...experiences, Experience("", "", "", "", "", newId)]);
    setSelected(newId);
  }
  function handleDeletion(expToDelete) {
    let newArray = experiences.slice();
    newArray = newArray.filter((exp) => {
      return exp != expToDelete;
    });
    setExperiences(newArray.slice());
  }
  function displayInputs(exp) {
    return (
      <form action="" className="" key={exp.id}>
        <span>#{exp.id + 1}</span>
        <input
          id="structureExp"
          name="structure"
          type="text"
          placeholder="position"
          defaultValue={exp.structure}
          onChange={(e) => handleChangeStructure(exp, e)}
        />
        <input
          id="titleExp"
          name="title"
          type="text"
          placeholder="position"
          defaultValue={exp.title}
          onChange={(e) => handleChangeTitle(exp, e)}
        />
        <input
          id="beginningExp"
          name="beginning"
          type="text"
          placeholder="start date"
          defaultValue={exp.beginning}
          onChange={(e) => handleChangeBeginning(exp, e)}
        />
        <input
          id="endExp"
          name="end"
          type="text"
          placeholder="end date"
          defaultValue={exp.end}
          onChange={(e) => handleChangeEnd(exp, e)}
        />
        <textarea
          id="descriptionExp"
          name="description"
          placeholder="describe your work there"
          defaultValue={exp.description}
          onChange={(e) => handleChangeDescription(exp, e)}
        />
        <div className="flex">
          <button
            type="button"
            className="btn btn-primary"
            onClick={function () {
              setSelected(-1);
            }}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={function () {
              handleDeletion(exp);
            }}
          >
            Delete
          </button>
        </div>
      </form>
    );
  }
  function displayDivs(exp) {
    return (
      <form
        id={experiences.length * exp.id}
        onClick={function () {
          setSelected(exp.id);
        }}
      >
        <span>
          #{exp.id + 1}{" "}
          <span className="text-white-50 fs-6 spaceLetters">Click to edit</span>
        </span>
        {exp.beginning}-{exp.end}
        <br />
        {exp.structure}
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
        Professional Experience
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
            setSelected(-1);
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
      <div className="formExperience">
        {experiences.map((exp) => displaySelected(exp))}
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
