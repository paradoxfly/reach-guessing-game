import { useState } from "react"

export function SetWager({deploy}){
    const [ wager, setWager ] = useState(0)
    return(
        <div>
            <input 
                name="wager" 
                type={'number'} 
                value={wager}
                onChange={(e) => setWager(e.target.value)} 
                min={0}
            />
            <button onClick={() => deploy(wager)}>Set the wager</button>
        </div>
    )
}