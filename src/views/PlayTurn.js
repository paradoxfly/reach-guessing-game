export function PlayTurn(){
    return(
        <div>
            <h3>Guess a number between 0 and 10</h3>
            <input type="number" max="10" min="0" />
            <button>Submit Guess</button>
        </div>
    )
}