import { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras"

function App() {
  const hangmanImageList = [
    "forca0",
    "forca1",
    "forca2",
    "forca3",
    "forca4",
    "forca5",
    "forca6",
  ];
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const totalWordList = palavras;
  const [rightWord, setRightWord] = useState("");
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [normalizedRightWord, setNormalizedRightWord] = useState([]);
  const [gameWord, setGameWord] = useState([]);
  const [clickedLetter, setClickLetter] = useState([]);
  const [wrongClick, setWrongClick] = useState(0);
  const [colorWord, setColorWord] = useState("");
  const [gameFinish, setGameFinish] = useState(false);
  const [inputGuess, setInputGuess] = useState("");
  console.log(rightWord);
  console.log(normalizedRightWord);

  function startGame() {
    setWrongClick(0);
    setGameFinish(false);
    setGameIsStarted(!gameIsStarted);
    const randomWord =
      totalWordList[selectWord(totalWordList.length)].split("");
    const normalizedWord = removeSpecialCharacters(randomWord);
    setRightWord(randomWord);
    setNormalizedRightWord(normalizedWord);
    setGameWord(normalizedWord.map((r) => "_"));
  }

  function selectWord(totalWord) {
    return Math.floor(Math.random() * totalWord);
  }

  function isIncludedInTheWord(letter) {
    setClickLetter([...clickedLetter, letter]);
    if (normalizedRightWord.includes(letter)) {
      setGameWord(wordWithRightLetter(letter));
      if (!wordWithRightLetter(letter).includes("_")) {
        endGame("right-answer");
      }
    } else {
      const counterAmount = wrongClick + 1;
      setWrongClick(counterAmount);
      if (counterAmount === 6) {
        endGame("wrong-answer");
      }
    }
  }
  function wordWithRightLetter(letter) {
    return normalizedRightWord.map((r, index) =>
      letter === r ? rightWord[index] : gameWord[index]
    );
  }
  function takeAGuess() {
    const guessWord = removeSpecialCharacters(inputGuess.split(""));
    const isRightAnswer = guessWord.filter(
      (g, index) => g === normalizedRightWord[index]
    );

    if (isRightAnswer.length === normalizedRightWord.length) {
      endGame("right-answer");
    } else {
      endGame("wrong-answer");
      setWrongClick(6);
    }
  }
  function removeSpecialCharacters(string) {
    return string.map((r) => r.normalize("NFD").replace(/[^a-zA-Z\s]/g, ""));
  }
  function endGame(result) {
    setColorWord(result);
    setGameWord(rightWord);
    setGameFinish(!gameFinish);
    setClickLetter([]);
    setGameIsStarted(false);
    setInputGuess("");
  }
  return (
    <>
      <Jogo
        hangmanImageList={hangmanImageList}
        startGame={startGame}
        rightWord={rightWord}
        gameWord={gameWord}
        wrongClick={wrongClick}
        colorWord={colorWord}
        gameFinish={gameFinish}
      />
      <Letras
        alphabet={alphabet}
        gameIsStarted={gameIsStarted}
        isIncludedInTheWord={isIncludedInTheWord}
        clickedLetter={clickedLetter}
      />
      <Chute
        gameIsStarted={gameIsStarted}
        inputGuess={inputGuess}
        setInputGuess={setInputGuess}
        takeAGuess={takeAGuess}
      />
    </>
  );
}

export default App;
