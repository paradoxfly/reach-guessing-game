import { useState } from "react"

export function PlayTurn({guess, played, round}){
    const [ hand, setHand ] = useState(0);
    const [ error, setError ] = useState(false)

    const handleChange = event => {
        const value = event.target.value;
        if( (value > 10) || (value < 0)){
            setError(true);
        }
        else {
            setHand(value);
            setError(false);
        }
    }

    const handleSubmit = () => {
        guess(hand);
        played();
    }

    return(
        <div>
            {
                round <= 1  ? 
                    <h3>Guess a number between 0 and 10</h3> :
                    <h3>Wrong Guess: Guess Again!</h3>
            }
            
            <input 
                className={ error ? 'error' : ' ' }
                type="number" 
                max="10" 
                min="0"
                value={hand}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit Guess</button>
            <br />
            { 
                error &&
                <small>Your guess must be between 0 and 10</small> 
            }
        </div>
    )
}