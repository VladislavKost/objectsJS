export const getSpecials = (character) => {
  const specials = character.special;
  const result = specials.map((special) => extractFields(special));
  return result;
};

const extractFields = ({
  id,
  name,
  description = "Описание недоступно",
  icon,
}) => {
  return {
    id,
    name,
    description,
    icon,
  };
};
