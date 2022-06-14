// const array = [
//     {
//         username: ' Jack',
//         full_name: 'Maks'
//     },
//     {
//         username: ' Jack',
//         full_name: 'Maks'
//     },
//     {
//         username: ' Jack',
//         full_name: 'Maks'
//     },
//     {
//         username: ' Jack',
//         full_name: 'Maks'
//     },
//     {
//         username: ' Jack',
//         full_name: 'Maks'
//     },
//     {
//         username: ' Jack',
//         full_name: 'Maks'
//     },
//     {
//         username: ' Jack',
//         full_name: 'Maks'
//     },
//     {
//         username: ' Jack',
//         full_name: 'Maks'
//     },
// ]
// //инкрементация
//  let i = 0 //i ++
//  i = i + 1

//  for(let i = 0; i < array.length; i++){
//      if(i ===5){
//          break;
//      } else {
//              console.log(array[i])
//          }
//      }
 
// for(let user of array){
//     console.log(user)
// }
// const obj = {
//     key1: "b1",
//     key2: "b2",
//     key3: "b3",
//     key4: "b4",
//     key5: "b5",
//     key6: "b6",
// }
// for(let key in obj){
//     console.log(obj[key])
// }


// const users = [
//     {
//         username: "Jack",
//         salary: 500
//     },
//     {
//         username: "John",
//         salary:1000
//     },
//     {
//         username: "shaman",
//         salary:10000
//     }
// ]
// const filteredUsers = []
// for(let user of users){
//     if (user.salary > 500){
//         filteredUsers.push(user)
//     }
// }
// console.log(filteredUsers)

// const filteredUsers = users.filter(user => user.salary > 500)
// console.log(filteredUsers)

// const heroes = [
//     {
//         username: "Halk",
//         powwer: 999
//     },
//     {
//         username: "Captain-America",
//         powwer: 9999
//     },
//     {
//         username: "Super-man",
//         powwer: 99999
//     },
//     {
//         username: "Tanos",
//         powwer: 999999
//     },
//     {
//         username: "Nurik",
//         powwer: 9999999
//     },
// ]
// const filteredUsers = heroes.filter(heroes => heroes.powwer > 99999)
//  console.log(filteredUsers)



// **************************Первое задание*******************************

// const limit = 7 
// let counter = 0

// while(counter <= limit) {
//     let result = ''
//     for (let i = 0; i < counter; i++) {
//         result += '#'
//     }
//     console.log(result)
//     counter++
// }

// // **************************Второе задание*******************************

// for (counter = 1; counter <= 100; counter ++) {
//     if (counter % 3 == 0)
//            console.log('FIZ');
//     else if ((counter % 3 != 0) && (counter % 5 == 0))
//            console.log('BUZ');
//         else if ((counter % 3 == 0) && (counter % 5 == 0))
//            console.log('FIZBUZ');
//     else
//        console.log(counter);

// function getFullName(user, age) {
//     if(age < 18){
//         alert("Close")
//         }else{
//             alert(user.first_name + " " + user.last_name + " " + "open")
//     }
// }

// const user = {
//     first_name: "John",
//     last_name: "Barbaro"
// }

// const age = prompt("Скаолько вам лет?")

// getFullName(user, age)

// const anonym = function (users) {
//     console.log(user, users)
// }
// anonym()

// let button;

// button.onlick = function () {

// }


//***********************************1 ЗАДАНИЕ 3 УРОКА */
// function numbers(number1, number2){
//     if(number1 > number2){
//         console.log("Первое больше")
//     }else if(number2 > number1){
//         console.log("Второе больше")
//     }else {
//         console.log("Они равны")
//     }
// }

// const number = {
//     number1: prompt("число?"),
//     number2: prompt("число?")
// }
// numbers(number.number1, number.number2)

/////////////////////////////////////2 ЗАДАНИЕ 3 УРОКА

const findLenghtAndPosition = (str, char) =>{
    const strLength = str.length;
    const position =  str.indexOf(char) != -1 ? str.indexOf(char) : 0;
    return {
        length: strLength,
        position: position
    }
}

console.log('Find: ', findLenghtAndPosition('Temirlan sensey', 's')); //{ length: 15, position: 9 }




