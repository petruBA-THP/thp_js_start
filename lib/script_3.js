let diese = "#"
let space = " "
let nbLines= Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"))
let nbDiese = 1
let nbSpace = nbLines -1
pyramide=[]
for(let i=1; i <= nbLines; i++){
    console.log(space.repeat(nbSpace)+diese.repeat(nbDiese))
    nbSpace = nbSpace - 1
    nbDiese = nbDiese + 1
}
