function FormCoordinates(args) {
  return (
    <>
      <div>
        Coordinates
        <form action="">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            defaultValue={args.name}
            onChange={(e) => args.setName(e.target.value)}
          />
          <label htmlFor="inputSurname">Surname</label>
          <input
            type="text"
            defaultValue={args.surname}
            onChange={(e) => args.setSurname(e.target.value)}
          />
          <label htmlFor="inputEmail">Email</label>
          <input
            type="text"
            defaultValue={args.mail}
            onChange={(e) => args.setMail(e.target.value)}
          />
          <label htmlFor="inputPhone">Phone</label>
          <input
            type="text"
            defaultValue={args.phone}
            onChange={(e) => args.setPhone(e.target.value)}
          />
          <label htmlFor="inputLocation">Location</label>
          <input
            type="text"
            defaultValue={args.location}
            onChange={(e) => args.setLocation(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}
export default FormCoordinates;
