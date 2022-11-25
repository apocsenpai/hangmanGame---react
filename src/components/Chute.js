function Chute({gameIsStarted, inputGuess, setInputGuess, takeAGuess}){
    return (
        <section className="take-a-guess">
            <label htmlFor="guess">Já sei a palavra!</label>
            <input data-test="guess-input" onChange={(e)=>setInputGuess(e.target.value)} type={`text`} id="guess" placeholder="Só tem uma chance!!" value={inputGuess} disabled={!gameIsStarted ? true : false}></input>
            <button data-test="guess-button" onClick={takeAGuess} disabled={!gameIsStarted ? true : false}>Chutar</button>
        </section>
    );
}

export default Chute;