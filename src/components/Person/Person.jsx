export const Person = ({ person }) => {
  let partnerName = 'I am not married';

  if (person.isMarried) {
    partnerName = `${person.partnerName} is my ${Person.sex === 'f' ? 'husband' : 'wife'}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <p className="Person__age">I am {person.age}</p>
      <p className="Person__partner">{partnerName}</p>
    </section>
  );
};
