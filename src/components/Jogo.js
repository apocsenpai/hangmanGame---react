import styled from "styled-components";

const Jogo = ({
  hangmanImageList,
  startGame,
  gameWord,
  rightWord,
  wrongClick,
  gameResult,
  gameFinish,
}) => {
  return (
    <GameSection>
      <img
        data-test="game-image"
        src={`./assets/${hangmanImageList[wrongClick]}.png`}
      />
      <section>
        <button data-test="choose-word" onClick={startGame}>
          Escolher Palavra
        </button>
        <WordGame
          data-test="word"
          data-answer={rightWord}
          gameFinish={gameFinish}
          gameResult={gameResult}
        >
          {gameWord}
        </WordGame>
      </section>
    </GameSection>
  );
};

const GameSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 59px 38px;
  img {
    width: min(50vw, 400px);
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px 20px;
    button {
      width: 200px;
      height: 60px;
      background-color: #27ae60;
      border-radius: 8px;
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      cursor: pointer;
      border: none;
      transition: 150ms linear;
      &:hover {
        opacity: 0.93;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    }
  }
`;

const WordGame = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 10px;
  word-break: break-all;
  color: ${({ gameFinish, gameResult }) => {
    if (!gameFinish) {return "black"};

    return !gameResult ? "#ff0000" : "#27AE60";
  }};
`;

export default Jogo;
