function createEmptyObj(){
    let obj = Object.create(null);
    return obj;
}

let Ivan = createEmptyObj();
Ivan.ownWife = "Julia";
console.log(Object.values(Ivan));

