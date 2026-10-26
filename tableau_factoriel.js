const T1 =[2 , 1 , 7 , 8]
function factorielle(n){
    let facto = 1
    for(let i = 1; i<=n; i++){
        facto = facto*i
    }
    return facto
}
const ResultatFinal = T1.map(factorielle)
console.log(ResultatFinal)