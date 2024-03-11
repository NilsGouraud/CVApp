import emailLogo from "../assets/email.png";
import phoneLogo from "../assets/phone.png";
import locationLogo from "../assets/location.png";

function DisplayCoordinates(args) {
  return (
    <>
      <div className="coordinates">
        <h1 className="name">
          {args.name} {args.surname}
        </h1>
        <div className="details">
          <div>
            <img src={emailLogo} alt="email" />
            {args.mail}
          </div>
          <div>
            <img src={phoneLogo} alt="phone" />
            {args.phone}
          </div>
          <div>
            <img src={locationLogo} alt="location" />
            {args.location}
          </div>
        </div>
      </div>
    </>
  );
}
export default DisplayCoordinates;
