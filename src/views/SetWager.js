export function SetWager(){
    return(
        <div>
            <input name="wager" type={'number'} placeholder="Enter wager amount" min={0}/>
            <button>Set the wager</button>
        </div>
    )
}