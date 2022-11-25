function Letras({alphabet, gameIsStarted, isIncludedInTheWord, clickedLetter}){
    return (
        <section className="alphabet-buttons">
            {alphabet.map((a)=><SingleLetter key={a} letter = {a} isIncludedInTheWord={isIncludedInTheWord} gameIsStarted={gameIsStarted} clickedLetter={clickedLetter} />)}
        </section>
    );
}


function SingleLetter({letter, gameIsStarted, isIncludedInTheWord, clickedLetter}){
    return (
        <button data-test="letter" onClick={()=>isIncludedInTheWord(letter)} className={`letter-button${(!gameIsStarted || clickedLetter.includes(letter)) ? "" : " active-button"}`} disabled={(!gameIsStarted || clickedLetter.includes(letter)) ? true : false}>
            {letter.toUpperCase()}
        </button>
    )
}

export default Letras;