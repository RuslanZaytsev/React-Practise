const PetInfo = ({ pet, age, hasPet }) => {
  const innerText = hasPet
    ? `My ${pet} ${age} years old`
    : "I don't have a pet";
  return <h1>{innerText}</h1>;
};

export default PetInfo;
