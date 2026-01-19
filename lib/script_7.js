function teenBot(ask){
    repOK=0
    if ( ask.charAt(ask.length - 1) == "?" ){
    console.log("Ouais... Ouais...")
    return
    }
    for (let i = 0; i < ask.length; i++) {
        if (ask[i] != ask[i].toUpperCase()) {
            break
        }
        if ( i == ask.length - 1 ) { 
            console.log("Pwa, calme-toi...")
            return
            }
        }
    if ( ask.includes("Fortnite") || ask.includes("fortnite") ){
        console.log("on s' fait une partie soum-soum ?")
        return
    }
    if ( ask =="" ){
        console.log("'es en PLS ?" )
    } else {
    console.log(" ?!? balek !" )
    }
}



let ask = prompt("Saisie une phrase : ")
teenBot(ask)
