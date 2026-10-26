const tab = [12 , 16 , 8, 10]
const moy = tab.reduce((a,n)=>(a+n)/tab.length,0)
console.log(moy)
const som = tab.reduce((a,b)=>a+b,tab[1])
console.log(som)
console.log(tab.length)