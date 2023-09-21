/* 
Pаписать функцию, которая создает пустой объект, но без прототипа.
*/

function createEmpty(){
    return Object.create(null);
}

console.log (createEmpty());