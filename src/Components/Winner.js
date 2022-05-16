import "./winner.scss";


export default function Winner(){
    return(
        <div class="wrapper">
            <div class="modal modal--congratulations">
                <div class="modal-top">
                    <img class="modal-icon u-imgResponsive" src="https://dl.dropboxusercontent.com/s/e1t2hhowjcrs7f5/100daysui_100icon.png" alt="Trophy" />
                    <div class="modal-header">Congratulations</div>
                    <div class="modal-subheader">You Win</div>
                </div>
                <div class="modal-bottom">
                    <button class="modal-btn u-btn u-btn--share">Play again</button>
                    <button class="modal-btn u-btn u-btn--success">Have a beer</button>
                </div>
            </div>
        </div>
    )
}