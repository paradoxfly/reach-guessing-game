import { useState } from "react";
import './index.scss';

const initialSelected = new Array(11);
initialSelected.fill(false);

export function PlayTurn({guess, played, round}){
    const [ hand, setHand ] = useState(undefined);
    const [ selected, setSelected ] = useState(initialSelected)
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

    const onChange = event => {
        const value = parseInt(event.target.id);
        const copy = new Array(11);
        copy.fill(false);
        copy[value] = true;
        setSelected(copy);
        setHand(value);
    }

    const handleSubmit = () => {
        guess(hand);
        played();
    }

    return(
        <div>
            {
                round <= 1  ? 
                    <>
                        <h3>You have three guesses to guess our secret number between 0 and 10!! </h3>
                        <h3>Make your guess</h3>
                    </> :
                    <h3>Wrong Guess: Guess Again! you have { 4 - round } trial{ 4-round>1?'s':''} left</h3>
            }

            {
                hand !== undefined && !isNaN(hand) &&
                <button onClick={handleSubmit}>Submit Guess</button>
            }
            
            
            {/* <input 
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
            } */}

            <div className="card-container">

                {
                    Array.from({length: 11})
                    .map((_, index) => (
                        <div 
                            className={ 
                                selected[index] === true ? `card selected` : `card`}  
                                id={index}
                                onClick={onChange}
                            >
                            <span className="content"> {index} </span>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}