import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import FormExperiences from "./Forms/FormExperiences";
import FormEducation from "./Forms/FormEducation";
import DisplayExperiences from "./Displays/DisplayExperiences";
import DisplayEducation from "./Displays/DisplayEducation";
import FormCoordinates from "./Forms/FormCoordinates";
import DisplayCoordinates from "./Displays/DisplayCoordinates";
import Experience from "./Experience";
import Education from "./Education";
import { jsPDF } from "jspdf";
function App() {
	useEffect(()=>{alert("le site est en cours de développement")},[]);
  let count = 0;
  let defaultContent = {
    name: "Nils",
    surname: "Gouraud",
    mail: "gouraud.nils@gmail.com",
    phone: "07 50 98 29 62",
    location: "Cholet, France",
  };
  let arrayExperiences = [
    Experience(
      2022,
      2023,
      "BPCX",
      "Agent de production",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima rem omnis dolor laudantium. Qui, sed. Modi, aliquid quis ",
      count++
    ),
    Experience(
      2021,
      2022,
      "Agri Pasquier",
      "Agent de production",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima rem omnis dolor laudantium. Qui, sed. Modi, aliquid quis ",
      count++
    ),
  ];
  let arrayEducation = [
    Education(
      2022,
      2025,
      "CNAM",
      "licence informatique",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima rem omnis dolor laudantium. Qui, sed. Modi, aliquid quis ",
      0
    ),
    Education(
      2017,
      2020,
      "Université d'Angers",
      "licence LEA Anglais-Italien",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima rem omnis dolor laudantium. Qui, sed. Modi, aliquid quis ",
      0
    ),
  ];
  let [experiences, setExperiences] = useState(arrayExperiences);
  let [education, setEducation] = useState(arrayEducation);

  const [name, setName] = useState(defaultContent.name);
  const [surname, setSurname] = useState(defaultContent.surname);
  const [mail, setMail] = useState(defaultContent.mail);
  const [phone, setPhone] = useState(defaultContent.phone);
  const [location, setLocation] = useState(defaultContent.location);
  let hooksCoordinates = {
    name,
    setName,
    surname,
    setSurname,
    mail,
    setMail,
    phone,
    setPhone,
    location,
    setLocation,
  };

  return (
    <>
      <div className="forms">
        {FormCoordinates(hooksCoordinates)}
        {FormExperiences(experiences, setExperiences)}
        {FormEducation(education, setEducation)}
      </div>
      <button
        type="button"
        className="btn btn-primary printButton"
        onClick={function () {
          let doc = new jsPDF("p", "pt", "a4", true);
          doc.html(document.querySelector("#resume")).then(() => {
            doc.save("resume.pdf");
          });
        }}
      >
        save resume as PDF (could fail)
      </button>

      <div className="resume" id="resume">
        {DisplayCoordinates(hooksCoordinates)}
        {DisplayExperiences(experiences)}
        {DisplayEducation(education)}
      </div>
    </>
  );
}
export default App;
