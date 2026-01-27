type CardType = {
  name: string;
  isComplete: boolean;
  toggleComplete: (name: string, isComplete: boolean) => void;
  removeTodo: (name: string) => void;
};

/**
 * 1. If the card is marked complete =>
 *    - invert boolean value
 *    - visually cross the name out
 *    - strike-through
 */

// conditional ? true : false

export const Card = ({ name, isComplete, toggleComplete, removeTodo }: CardType) => {
  return (
    <div>
      <p className={isComplete ? "line-through" : "" }>{name}</p>
      <button onClick={() => toggleComplete(name, isComplete)}>
        Mark Complete
      </button>
      <button onClick={() => removeTodo(name)}>Remove Task</button>
    </div>
  );
};
