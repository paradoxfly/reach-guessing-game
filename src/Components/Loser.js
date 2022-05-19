import './loser.css';

export default function Loser({playAgain}){
    return(
        <div>
            <p>You lose</p>
            <div class='container'>
            <div class='tear'></div>
            <div class='tear2'></div>
            <div class='face'>
                <div class='eyebrow'>︶</div>
                <div class='eyebrow'>︶</div>
                <div class='eye'></div>
                <div class='eye'></div>
                <div class='mouth'></div>
            </div>
            </div>
            <button className='playagainloser' onClick={playAgain}>Play Again</button>
        </div>
    )
}