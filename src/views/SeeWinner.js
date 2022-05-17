import Winner from "../Components/Winner";
import Loser from "../Components/Loser";

export function SeeWinner({outcome, isAlice}){
    console.log(outcome)
    return(
        <div>
            {
                outcome === 0 ? isAlice ? <Loser /> :  <Winner /> : null
            }

            {
                outcome === 1 && <h2>Nobody Wins</h2>
            }

            {
                outcome === 2 ? isAlice ? <Winner /> :  <Loser /> : null
            }
        </div> 
    )
}