const T1 =[2 , 1 , 7 , 8]
function factorielle(n){
    let facto = 1
    for(let i = 1; i<=n; i++){
        facto = facto*i
    }
    return facto
}
let facto = []
for(let p = 0; p < T1.length ; p++ ){
    facto.push(factorielle(T1[p]))
}
  console.log(facto)