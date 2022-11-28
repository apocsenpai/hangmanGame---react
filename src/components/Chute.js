import styled from "styled-components";

const Chute = ({ gameIsStarted, inputGuess, setInputGuess, takeAGuess }) => {
  return (
    <TakeAGuess>
      <label htmlFor="guess">Já sei a palavra!</label>
      <input
        data-test="guess-input"
        onChange={(e) => setInputGuess(e.target.value)}
        type="text"
        placeholder="Só tem uma chance!!"
        value={inputGuess}
        disabled={!gameIsStarted}
      ></input>
      <ButtonGuess
        data-test="guess-button"
        onClick={takeAGuess}
        disabled={!gameIsStarted}
      >
        Chutar
      </ButtonGuess>
    </TakeAGuess>
  );
};

const TakeAGuess = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 70px;
  label {
    font-size: 20px;
  }
  input {
    width: 353px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #ccc;
    font-size: 20px;
    text-align: center;
    padding-left: 10px;
    transition: 150ms linear;
    &:focus {
      outline: none;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`;
const ButtonGuess = styled.button`
  color: #3c76a1;
  font-weight: 700;
  width: 100px;
  height: 40px;
  border: 1px solid #7aa7c7;
  background-color: ${({ disabled }) => (disabled ? "#9FAAB5" : "#E1ECF4")};
  border-radius: 3px;
  cursor: ${({ disabled }) => (disabled ? "inherit" : "pointer")};
  transition: ${({ disabled }) => (disabled ? "none" : "200ms linear")};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? "1" : "0.93")};
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
  }
`;
export default Chute;
