let arr = ['uzum', 'nok' , "banan", "mashina","asal","olma","bori","gul"]
,
juftarr = ['uzum', 'nok' , "banan", ]
toqarr = ["mashina","asal","olma","bori","gul"]
for (const element of arr) {
    if (typeof element == 'juftarr') {
        juftarr.push(element)
    }else{
        toqarr.push(element)
    }
}
console.log(juftarr);
console.log(toqarr);
