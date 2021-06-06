//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function Device(name,power){
    this.name = name,
    this.power = power,
    this.isOn = false
}
WirelessDevice.prototype = new Device();

function WirelessDevice(name,power,cap){
    this.name = name,
    this.hasBattery = true,
    this.BatteryCapacity = cap,
    this.power = power,
    this.isCharging = false
}
function countPower(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i].isOn === true || arr[i].isCharging === true) {
            sum += arr[i].power;
        }
    }
    return sum;
}

// Device.prototype.power = function (){
//     if (this.isOn === true) return power;
//     else return 0;
// }
// WirelessDevice.prototype.power = function (){
//     if (this.isCharging === true) return power;
//     else return 0;
// }

WirelessDevice.prototype.getCapacity = function (obj){
    console.log(`Объём аккумулятора устройства ${obj.name} - ${obj.BatteryCapacity} mah`)
}
WirelessDevice.prototype.charging = function (){
    this.isCharging = true
}
Device.prototype.turnOn = function (){
    this.isOn = true
}
Device.prototype.turnOff = function (){
    this.isOn = false;
    this.power = 0;
}

let PC = new Device("Xeon",750);
    console.log(PC);
PC.turnOn();
    console.log(PC);
let lamp = new Device("Gloss21",60);
lamp.turnOn();
let phone1 = new WirelessDevice("Iphone_Julia",20,1800);
phone1.getCapacity(phone1);
    console.log(phone1);
let phone2 = new WirelessDevice("Xiaomi_3AXA",35,4000);
phone2.getCapacity(phone2);
    console.log(phone2);
phone2.charging();
    console.log(phone2);
PC.turnOff();
    console.log(PC);

let ArrObjects = [];
ArrObjects[0] = PC;
ArrObjects[1] = phone1;
ArrObjects[2] = phone2;
ArrObjects[3] = lamp;

console.log(`В данный момент всеми электроприборами потребляется - ${countPower(ArrObjects)} ватт энергии`);
