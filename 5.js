/* 
Переписать консольное приложение из предыдущего юнита на классы.

*/


class ElectricObj{
    constructor(name){
        this.name = name;
        this.isWorking = false
    }

    switching(tumbler){
        if (tumbler==='on'){
            this.isWorking = true
        } else {
            this.isWorking = false
        }
    }
}

class ElectricObjParameters extends ElectricObj{
    constructor(name, power){
        super(name);
        this.power = power
    }

    getPowerWorking(){
        console.log(`${this.name} with ${this.power} Power is ${this.isWorking ? 'on' : 'off'}`)    
    }
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