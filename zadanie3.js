//Написать функцию, которая создает пустой объект, но без прототипа.
function createEmptyObj(){
    let obj = Object.create(null);
    return obj;
}

let Ivan = createEmptyObj();
Ivan.ownWife = "Julia";
console.log(Object.values(Ivan));

