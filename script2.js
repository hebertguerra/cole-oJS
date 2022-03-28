const meuArrey = [30, 30, 40, 5, 223, 2054, 3034, 5, 10, 403];

function valoresUnicos(arr){
    const mySet = new Set(arr);


    return [...mySet];
}
console.log(valoresUnicos(meuArrey));