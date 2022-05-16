export function ConnectAccount(){
    return(
        <div>
            <button>Connect To MyAlgoConnect Wallet</button>
            <hr />
            <div className="mnemonic">
                <textarea placeholder="Paste Mnemonic Key"/><br/>
                <button>Connect</button>
            </div>
        </div>
    );
};