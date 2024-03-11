function Experience(beg, en, str, tit, desc, i) {
  let beginning = beg;
  let end = en;
  let structure = str;
  let title = tit;
  let description = desc;
  let id = i;
  return {
    beginning,
    end,
    structure,
    title,
    description,
    id,
  };
}
export default Experience;
