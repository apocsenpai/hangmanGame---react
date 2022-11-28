import styled from "styled-components";

const Letras = ({
  alphabet,
  gameIsStarted,
  isIncludedInTheWord,
  clickedLetter,
}) => {
  return (
    <AlphabetButtons >
      {alphabet.map((a) => (
        <SingleLetter
          key={a}
          letter={a}
          isIncludedInTheWord={isIncludedInTheWord}
          gameIsStarted={gameIsStarted}
          clickedLetter={clickedLetter}
        />
      ))}
    </AlphabetButtons>
  );
};

const SingleLetter = ({
  letter,
  gameIsStarted,
  isIncludedInTheWord,
  clickedLetter,
}) => {
  return (
    <Letter
      data-test="letter"
      onClick={() => isIncludedInTheWord(letter)}
      disabled={!gameIsStarted || clickedLetter.includes(letter)}
    >
      {letter.toUpperCase()}
    </Letter>
  );
};

const AlphabetButtons = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(13, 40px);
  gap: 12px;
  justify-content: center;
  margin: 30px 0;
`;

const Letter = styled.button`
  width: 40px;
  height: 40px;
  color: #7aa7c7;
  border: 1px solid #7aa7c7;
  border-radius: 3px;
  background-color: ${({ disabled }) => (disabled ? "#9FAAB5" : "#E1ECF4")};
  font-weight: 700;
  transition: ${({ disabled }) => (disabled ? "none" : "200ms ease")};
  cursor: ${({ disabled }) => (disabled ? "inherit" : "pointer")};
  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.2)")};
    box-shadow: ${({ disabled }) => (disabled ? "none" : "rgba(0, 0, 0, 0.35) 0px 5px 15px")};
  }
`;

export default Letras;
