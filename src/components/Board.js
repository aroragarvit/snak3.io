const Board = ({ number, setNumber }) => {
  return (
    <div>
      <button
        onClick={() => {
          setNumber(Math.floor(Math.random() * 10) + 1);
        }}
      >
        Generate
      </button>
    </div>
  );
};
export default Board;
