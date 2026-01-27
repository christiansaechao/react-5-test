
type CardType = {
  name: string;
};

export const Card = ({ name }: CardType) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
