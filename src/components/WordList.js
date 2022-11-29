import styled from "styled-components";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import ShowWordList from "./ShowWordList";

const WordList = ({
  totalWordList,
  visibleWordList,
  toggleWordList,
  visibleInputAddWord,
  toggleInputAddWord,
  setInputAddWord,
  inputAddWord,
  addWordOnList
}) => {
  return (
    <DisplayWordList visibleWordList={visibleWordList}>
      <section>
        <h3>
          Lista de palavras
          <span onClick={()=>{
            toggleWordList();
            if(visibleInputAddWord){
                toggleInputAddWord()
            }
          }}>
            <AiOutlineClose />
          </span>
        </h3>
        <ul>
          {totalWordList.map((t) => (
            <SingleWord key={t} word={t} />
          ))}
        </ul>
        <AddWord onClick={toggleInputAddWord} visibleWordList={visibleWordList}>
          <span>
            <AiOutlinePlus />
          </span>
        </AddWord>
        <InputAddWord visibleInputAddWord={visibleInputAddWord}>
          <input
            placeholder="Digite uma palavra"
            onChange={(e) => setInputAddWord(e.target.value)}
            value={inputAddWord}
            type={"text"}
          />
          <button onClick={addWordOnList}>
            <AiOutlinePlus />
          </button>
        </InputAddWord>
      </section>
    </DisplayWordList>
  );
};

const SingleWord = ({ word }) => {
  return <li>{word}</li>;
};

const DisplayWordList = styled.div`
  visibility: ${({ visibleWordList }) =>
    visibleWordList ? "visible" : "hidden"};
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #00000040;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  section {
    width: 400px;
    height: 500px;
    background-color: #fff;
    padding-top: 20px;
    border-radius: 10px;
    position: relative;
    h3 {
      font-size: 24px;
      text-align: center;
      padding-bottom: 10px;
      span {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 16px;
        color: #8c8c8c;
        cursor: pointer;
        &:hover {
          color: black;
        }
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      padding: 20px 5px;
      justify-content: center;
      overflow: scroll;
      height: 93%;
      position: relative;
    }
    li {
      background-color: #e5e5e5;
      border-radius: 20px;
      padding: 8px;
      font-size: 18px;
    }
  }
`;

const AddWord = styled(ShowWordList)`
  bottom: 8px;
  right: 10px;
  transition: ${({ visibleWordList }) =>
    visibleWordList ? "1000ms ease" : "none"};
  overflow-x: hidden;
  span {
    transition: ${({ visibleWordList }) =>
      visibleWordList ? "600ms ease-in-out" : "none"};
  }
  &::after {
    transition: ${({ visibleWordList }) =>
      visibleWordList ? "600ms ease-in-out" : "none"};
    content: "Adicionar";
    width: 0;
    opacity: 0;
    font-size: 20px;
  }
  &:hover {
    opacity: 1;
    border-radius: 20px;
    width: 130px;
    span {
      transform: rotateZ(-180deg);
    }
    &::after {
      opacity: 1;
    }
  }
`;

const InputAddWord = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  visibility: ${({ visibleInputAddWord }) =>
    visibleInputAddWord ? "visible" : "hidden"};
  input {
    color: #3c76a1;
    font-weight: 700;
    width: 100%;
    transition: ${({ visibleInputAddWord }) =>
      visibleInputAddWord ? "150ms ease" : "none"};
    height: ${({ visibleInputAddWord }) =>
      visibleInputAddWord ? "40px" : "0px"};
    border: none;
    text-align: center;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    color: #fff;
    background-color: #27ae60;
    width: 40px;
    cursor: pointer;
  }
`;
export default WordList;
