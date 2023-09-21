/* 
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

        Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
        Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
        У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
        Создать экземпляры каждого прибора.
        Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

*/

function ElectricObj(name){
    this.name = name,
    this.isWorking = false
}

ElectricObj.prototype.switching = function(tumbler){
    if (tumbler=='on'){
        this.isWorking = true
    } else {
        this.isWorking = false
    }
}

function ElectricObjParameters(name, power){
    this.name = name,
    this.power = power
}

ElectricObjParameters.prototype = new ElectricObj();

ElectricObjParameters.prototype.getPowerWorking = function(){
    console.log(`${this.name} with ${this.power} Power is ${this.isWorking ? 'on' : 'off'}`)    
}

const pc = new ElectricObjParameters('Laptop', 50);
const tv = new ElectricObjParameters('LCD TV', 60);
const lamp = new ElectricObjParameters('lamp', 15);
pc.getPowerWorking();
tv.getPowerWorking();
lamp.getPowerWorking();
pc.switching('on');
tv.switching('on');
lamp.switching('on');
pc.getPowerWorking();
tv.getPowerWorking();
lamp.getPowerWorking();
lamp.switching('off');

function totalPowerCalc(objArray){
    let totalPower = 0
    for (let i of objArray){
        i.isWorking ? totalPower += i.power : totalPower += 0
    }
    return totalPower
}

console.log(totalPowerCalc([pc, tv, lamp]))