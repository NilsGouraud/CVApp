import { useState } from "react";
import Education from "../Education";

function FormEducation(education, setEducation) {
  let [selected, setSelected] = useState(-1);

  function handleChangeBeginning(ed, e) {
    let newEd = ed;
    newEd.beginning = e.target.value;
    ed = newEd;
    setEducation(education.slice());
  }
  function handleChangeEnd(ed, e) {
    let newEd = ed;
    newEd.end = e.target.value;
    ed = newEd;
    setEducation(education.slice());
  }
  function handleChangeStructure(ed, e) {
    let newEd = ed;
    newEd.structure = e.target.value;
    ed = newEd;
    setEducation(education.slice());
  }
  function handleChangeTitle(ed, e) {
    let newEd = ed;
    newEd.title = e.target.value;
    ed = newEd;
    setEducation(education.slice());
  }
  function handleChangeDescription(ed, e) {
    let newEd = ed;
    newEd.description = e.target.value;
    ed = newEd;
    setEducation(education.slice());
  }
  function createNewEducation() {
    let newId = -1;
    let taken = [];
    let newArray = education.slice();
    newArray.map((ed) => taken.push(ed.id));
    for (let i = 0; i <= education.length && newId == -1; i++) {
      console.log(i);
      if (!taken.includes(i)) {
        console.log("picking " + i);
        newId = i;
      }
    }
    setEducation([...education, Education("", "", "", "", "", newId)]);
    setSelected(newId);
  }
  function handleDeletion(edToDelete) {
    let newArray = education.slice();
    newArray = newArray.filter((ed) => {
      return ed != edToDelete;
    });
    setEducation(newArray.slice());
  }
  function displayInputs(ed) {
    return (
      <form action="" className="" key={ed.id}>
        <span>#{ed.id + 1}</span>
        <input
          id="structureEd"
          name="structure"
          type="text"
          placeholder="school"
          defaultValue={ed.structure}
          onChange={(e) => handleChangeStructure(ed, e)}
        />
        <input
          id="titleEd"
          name="title"
          type="text"
          placeholder="degree"
          defaultValue={ed.title}
          onChange={(e) => handleChangeTitle(ed, e)}
        />
        <input
          id="beginningEd"
          name="beginning"
          type="text"
          placeholder="start date"
          defaultValue={ed.beginning}
          onChange={(e) => handleChangeBeginning(ed, e)}
        />
        <input
          id="endEd"
          name="end"
          type="text"
          placeholder="end date"
          defaultValue={ed.end}
          onChange={(e) => handleChangeEnd(ed, e)}
        />
        {/* 
        <textarea
          id="descriptionEd"
          name="description"
          placeholder="describe your degree"
          defaultValue={ed.description}
          onChange={(e) => handleChangeDescription(ed, e)}
        />
         */}
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
              handleDeletion(ed);
            }}
          >
            Delete
          </button>
        </div>
      </form>
    );
  }
  function displayDivs(ed) {
    return (
      <form
        id={education.length * ed.id}
        onClick={function () {
          setSelected(ed.id);
        }}
      >
        <span>
          #{ed.id + 1}{" "}
          <span className="text-white-50 fs-6 spaceLetters">Click to edit</span>
        </span>
        <br />
        {ed.beginning}-{ed.end}
        <br />
        {ed.structure}
      </form>
    );
  }
  function displaySelected(ed) {
    if (selected === ed.id) {
      return displayInputs(ed);
    } else {
      return displayDivs(ed);
    }
  }
  return (
    <div>
      <label htmlFor="dropDownEd" className="dropDown">
        Education
      </label>
      <input
        id="dropDownEd"
        type="text"
        onClick={() => {
          if (
            document
              .getElementsByClassName("formEducation")[0]
              .classList.contains("active")
          ) {
            document
              .getElementsByClassName("formEducation")[0]
              .classList.remove("active");
            setSelected(-1);
          } else {
            document
              .getElementsByClassName("formExperience")[0]
              .classList.remove("active");
            document
              .getElementsByClassName("formEducation")[0]
              .classList.add("active");
          }
        }}
      />
      <div className="formEducation active">
        {education.map((ed) => displaySelected(ed))}
        <input
          type="button"
          name="addEducation"
          onClick={function () {
            createNewEducation();
          }}
          value="add"
        />
      </div>
    </div>
  );
}
export default FormEducation;
