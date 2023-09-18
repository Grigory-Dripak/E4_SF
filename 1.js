/*
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и 
значения только собственных свойств. Данная функция не должна возвращать значение.
*/

let capitals = {
    Italy: 'Rome',
    Germany: 'Berlin',
    England: 'London',
    France: 'Paris',
}

function keyValue(obj){

    for (let key in obj){
        if (obj.hasOwnProperty(key)) {
              console.log(`Capital of ${ key } is ${ obj[key] }`);
        }   
    }

}

keyValue(capitals);