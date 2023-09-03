import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ManualHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis()

    // useEffect( function , dependency )
    // runs the function when the dependency returns true
    
    //stay connected even on reloads
    useEffect(()=> {
        if(isWeb3Enabled) return
        if(typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
        enableWeb3()
    }, [isWeb3Enabled]) 

    //Use connect button when disconnected 
    //Remove connected as the previous useEffect only runs when it finds the word connected
    useEffect(()=>{
        Moralis.onAccountChanged((account) => {
            if(account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
            }
        })
    }, [])

    return (<div>
        {account ? (
        <div>
            Connected to {account}
        </div>
    ) : (
        <button 
            onClick={
                async ()=>{
                    await enableWeb3()
                    //To set remembrance of clicking the connect button
                    if (typeof window !== "undefined") {
                    window.localStorage.setItem("connected", "injected")
                }
            }}
            disabled = { isWeb3EnableLoading }> Connect </button>)}
    </div>

    )
}