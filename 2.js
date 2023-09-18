/*
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/


let capitals = {
    Italy: 'Rome',
    Germany: 'Berlin',
    England: 'London',
    France: 'Paris',
}

const key = "France"

function keyValue(obj, str){

    if (str in obj) {
        return true;
    }   else{
        return false;
    }
}

keyValue(capitals, key);