export function DeployOrAttach({ setAsDeployer }){
    return(
        <div>
            <button
                onClick={() => setAsDeployer()}
            >Deploy new contract</button><br/>
            <h2>Or</h2>
            <button
                onClick={() => setAsDeployer(false)}
            >Attach to already existing contract</button>
        </div>
    );
};