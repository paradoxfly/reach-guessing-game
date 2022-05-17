import { useState } from "react"

export function PlayTurn({guess, played, isAlice, resolver}){
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
        resolver?.resolve(hand);
        played();
    }

    return(
        <div>
            <h3>Guess a number between 0 and 10</h3>
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
                <small>Your guess can't be more than 10 or less than 0</small> 
            }
        </div>
    )
}