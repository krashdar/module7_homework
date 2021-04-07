class Device{
    constructor(name,power)
    {
        this.name = name;
        this.power = power;
        this.isOn = false;
    }
    turnOn(){
        this.isOn = true;
    }
    turnOff(){
        this.isOn = false;
    }
}

class WirelessDevice extends Device{
    constructor(name, power, cap) {
        super(name,power);
        this.hasBattery = true;
        this.BatteryCapacity = cap;
        this.isCharging = false;
    }
    charging(){
//можно убрать у беcпроводных св-во ischarging и заменить метод charging чтобы он делал isOn=true, но я решил пока оставить так
//также упростился бы метод getPower
        this.isCharging = true;
    }
    getCapacity(){
        console.log(`Объём аккумулятора устройства ${this.name} - ${this.BatteryCapacity} mah`)
    }
}

//getPower станет таким, все остальное не изменится
// function getPower(obj){
//     if (obj.isOn !== true) obj.power = 0;
//     return obj.power;
// }

function getPower(obj){
    if (obj.hasBattery === true){
        if (obj.isCharging !== true) obj.power = 0;
    }else if (obj.isOn !== true) obj.power = 0;
    return obj.power;
}

function countPower(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++) sum += getPower(arr[i]);
    return sum;
}

const PC = new Device("Xeon",750);
console.log(PC);
PC.turnOn();
console.log(PC);
const lamp = new Device("Gloss21",60);
lamp.turnOn();
console.log(lamp)
const phone1 = new WirelessDevice("Iphone_Julia",20,1800);
console.log(phone1)
phone1.getCapacity();
console.log(phone1);
const phone2 = new WirelessDevice("Xiaomi_3AXA",35,4000);
phone2.getCapacity();
console.log(phone2)
phone2.charging();
console.log(phone2);
console.log(PC);

let ArrObjects = [];
ArrObjects[0] = PC;
ArrObjects[1] = phone1;
ArrObjects[2] = phone2;
ArrObjects[3] = lamp;

console.log(`В данный момент всеми электроприборами потребляется - ${countPower(ArrObjects)} ватт энергии`);