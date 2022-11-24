import { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras.js";

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
  const totalWordList = palavras.palavras;

  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [rightWord, setRightWord] = useState([]);
  const [gameWord, setGameWord] = useState([]);
  const [clickedLetter, setClickLetter] = useState([]);
  const [wrongClick, setWrongClick] = useState(0);
  const [colorWord, setColorWord] = useState("");
  const [gameFinish, setGameFinish] = useState(false)
  console.log(rightWord)

  function startGame() {
    setWrongClick(0);
    setGameFinish(false);
    setGameIsStarted(!gameIsStarted);
    const randomWord =
      totalWordList[selectWord(totalWordList.length)].split("");
    setRightWord(randomWord);
    setGameWord(randomWord.map((r) => "_"));
  }

  function selectWord(totalWord) {
    return Math.floor(Math.random() * totalWord);
  }

  function isIncludedInTheWord(letter) {
    setClickLetter([...clickedLetter, letter]);
    if (rightWord.includes(letter)) {
      const newGameWord = rightWord.map((r, index) => letter === r ? letter : gameWord[index]);
      setGameWord(newGameWord);
      if(!newGameWord.includes("_")){
        endGame('right-answer')
      }
    } else {
      const counterAmount = wrongClick + 1;
      setWrongClick(counterAmount);
      if (counterAmount === 6) {
        endGame('wrong-answer');
      }
    }
  }

  function endGame(result){
    setColorWord(result);
    setGameWord(rightWord);
    setGameFinish(!gameFinish);
    setClickLetter([]);
    setGameIsStarted(false);
  }
  return (
    <>
      <Jogo
        hangmanImageList={hangmanImageList}
        startGame={startGame}
        gameIsStarted={gameIsStarted}
        gameWord={gameWord}
        wrongClick={wrongClick}
        colorWord ={colorWord}
        gameFinish={gameFinish}
      />
      <Letras
        alphabet={alphabet}
        gameIsStarted={gameIsStarted}
        isIncludedInTheWord={isIncludedInTheWord}
        clickedLetter={clickedLetter}
      />
      <Chute gameIsStarted={gameIsStarted} />
    </>
  );
}

export default App;
