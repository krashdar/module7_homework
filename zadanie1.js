//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
//Данная функция не должна возвращать значение.
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
