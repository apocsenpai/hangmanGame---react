import Chute from './components/Chute';
import Jogo from './components/Jogo';
import Letras from './components/Letras';

function App() {
  const hangmanImageList = ["forca0","forca1","forca2","forca3","forca4","forca5","forca6"];
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  return (
    <>
      <Jogo hangmanImageList={hangmanImageList} />
      <Letras alphabet={alphabet} />
      <Chute />
    </>
  );
}

export default App;
