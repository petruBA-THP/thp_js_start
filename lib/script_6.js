const acid = [
  { amin: "Sérine", code: ["UCU","UCC","UCA","UCG","AGU","AGC" ]},
  { amin: "Proline", code: ["CCU","CCC","CCA","CCG"]},
  { amin: "Leucine", code: ["UUA","UUG"]},
  { amin: "Phénylalanine", code: ["UUU","UUC"]},
  { amin: "Arginine", code: ["CGU","CGC","CGA","CGG","AGA","AGG"]},
  { amin: "Tyrosine", code: ["UAU","UAC"]}
];

function getAcid(newCode){
for ( i in acid ){
    let obj = acid[i]
        for (j in obj.code) { if (obj.code[j] == newCode){ return obj.amin } //console.log(obj.amin); 
        //else {console.log(obj.code.length)}}
        }
    }
}

function seq(search){
    let sequence=[]
    for (let i = 0; i < search.length; i += 3){
    //console.log(search1.slice(i,i+3))
    sequence.push(search.slice(i,i+3))
    }
    return sequence
}

search1="CCGUCGUUGCGCUACAGC"
search2="CCUCGCCGGUACUUCUCG"
let rep1 =[]
let rep2 =[]

let seq1 = seq(search1)
let seq2 = seq(search2)

for (let i in seq1) {rep1.push(getAcid(seq1[i]))}
for (let i in seq2) {rep2.push(getAcid(seq2[i]))}

console.log("CCGUCGUUGCGCUACAGC => "+rep1.join("-"))
console.log("CCUCGCCGGUACUUCUCG => "+rep2.join("-"))