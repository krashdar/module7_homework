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

const show = obj => {
    for (let item in obj) {
        if (obj.hasOwnProperty(item)){
            console.log(`${item}: ${obj[item]}`);
        }
    }
}

show(Ivan);
show(Constantin);