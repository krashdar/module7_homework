const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};
const Ivan = Object.create(user);
const Constantin = Object.create(user);

Ivan.ownCar = "Audi RS6";
Ivan.ownWife = "Julia";
Constantin.ownPlane = "Airbus 320";

function validator(name, obj){
    for (let validName in obj){
        if (validName.toString()===name) {return true;}
    }
    return false;
}

const Name1 = "age";
const Name2 = "ownWife";
const Name3 = "ownPlane";

console.log(validator(Name1, user));
console.log(validator(Name2, Ivan));
console.log(validator(Name3, Ivan));
console.log(validator(Name2, Constantin));
console.log(validator(Name3, Constantin));