function Jogo({
  hangmanImageList,
  startGame,
  gameWord,
  rightWord,
  wrongClick,
  colorWord,
  gameFinish,
}) {
  return (
    <section className="game">
      <img data-test="game-image" src={`./assets/${hangmanImageList[wrongClick]}.png`} />
      <section>
        <button data-test="choose-word" onClick={startGame} className="btn-selectWord">
          Escolher Palavra
        </button>
        <p data-test="word" data-answer={rightWord} className={`word ${!gameFinish ? " " : colorWord}`}>
          {gameWord}
        </p>
      </section>
    </section>
  );
}

export default Jogo;
