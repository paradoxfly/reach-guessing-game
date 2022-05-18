import "./winner.scss";


export default function Winner({winner, playAgain}){
    return(
        <div className="wrapper">
            <div className="modal modal--congratulations">
                <div className="modal-top">
                    <img className="modal-icon u-imgResponsive" src="https://dl.dropboxusercontent.com/s/e1t2hhowjcrs7f5/100daysui_100icon.png" alt="Trophy" />
                    <div className="modal-header">Congratulations</div>
                    <div className="modal-subheader">
                        You { !winner && 'Both'} Win
                    </div>
                </div>
                <div className="modal-bottom">
                    <button 
                        className="modal-btn u-btn u-btn--share"
                        onClick={playAgain}
                    >
                        Play again
                    </button>
                    {/* <button className="modal-btn u-btn u-btn--success">Have a beer</button> */}
                </div>
            </div>
        </div>
    )
}