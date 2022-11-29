import { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import WordList from "./components/WordList";
import palavras from "./palavras.js";
import GlobalStyles from "./theme/GlobalStyles";

const App = () => {
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
  const [totalWordList, setTotalWordList] = useState(palavras);
  const [rightWord, setRightWord] = useState("");
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [normalizedRightWord, setNormalizedRightWord] = useState([]);
  const [gameWord, setGameWord] = useState([]);
  const [clickedLetter, setClickLetter] = useState([]);
  const [wrongClick, setWrongClick] = useState(0);
  const [gameResult, setGameResult] = useState(false);
  const [gameFinish, setGameFinish] = useState(false);
  const [inputGuess, setInputGuess] = useState("");
  const [visibleWordList, setVisibleWordList] = useState(false);
  const [visibleInputAddWord, setVisibleInputAddWord] = useState(false);
  const [inputAddWord, setInputAddWord] = useState("");
  const maxErrors = 6;

  function startGame() {
    setWrongClick(0);
    setGameFinish(false);
    setClickLetter([]);
    setGameIsStarted(!gameIsStarted || !gameFinish ? true : false);
    const randomWord = totalWordList[selectWord(totalWordList.length)];
    const normalizedWord = removeSpecialCharacters(randomWord.split(""));
    setRightWord(randomWord);
    setNormalizedRightWord(normalizedWord);
    setGameWord(normalizedWord.map(() => "_"));
  }

  function selectWord(totalWord) {
    return Math.floor(Math.random() * totalWord);
  }

  function isIncludedInTheWord(letter) {
    setClickLetter([...clickedLetter, letter]);
    if (normalizedRightWord.includes(letter)) {
      setGameWord(wordWithRightLetter(letter));
      if (!wordWithRightLetter(letter).includes("_")) {
        endGame(true);
      }
    } else {
      const counterAmount = wrongClick + 1;
      setWrongClick(counterAmount);
      if (counterAmount === maxErrors) {
        endGame(false);
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
      endGame(true);
    } else {
      endGame(false);
      setWrongClick(maxErrors);
    }
  }
  function removeSpecialCharacters(string) {
    return string.map((r) => r.normalize("NFD").replace(/[^a-zA-Z\s]/g, ""));
  }
  function endGame(result) {
    setGameResult(result);
    setGameWord(rightWord);
    setGameFinish(!gameFinish);
    setClickLetter([]);
    setGameIsStarted(false);
    setInputGuess("");
  }
  // Plus
  function toggleWordList() {
    setVisibleWordList(!visibleWordList);
  }
  function toggleInputAddWord() {
    setVisibleInputAddWord(!visibleInputAddWord);
  }
  function addWordOnList(){
    setTotalWordList([...totalWordList, inputAddWord]);
    setInputAddWord("");
    setVisibleInputAddWord(!visibleInputAddWord)
  }
  return (
    <>
      <GlobalStyles />
      <WordList
        totalWordList={totalWordList}
        visibleWordList={visibleWordList}
        toggleWordList={toggleWordList}
        toggleInputAddWord={toggleInputAddWord}
        visibleInputAddWord={visibleInputAddWord}
        setInputAddWord={setInputAddWord}
        inputAddWord={inputAddWord}
        addWordOnList={addWordOnList}
      />
      <Jogo
        hangmanImageList={hangmanImageList}
        startGame={startGame}
        rightWord={rightWord}
        gameWord={gameWord}
        wrongClick={wrongClick}
        gameResult={gameResult}
        gameFinish={gameFinish}
        toggleWordList={toggleWordList}
        gameIsStarted={gameIsStarted}
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
};

export default App;
