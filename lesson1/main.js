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

const limit = 7 
let counter = 0

while(counter <= limit) {
    let result = ''
    for (let i = 0; i < counter; i++) {
        result += '#'
    }
    console.log(result)
    counter++
}

// **************************Второе задание*******************************

for (counter = 1; counter <= 100; counter ++) {
    if (counter % 3 == 0)
           console.log('FIZ');
    else if ((counter % 3 != 0) && (counter % 5 == 0))
           console.log('BUZ');
        else if ((counter % 3 == 0) && (counter % 5 == 0))
           console.log('FIZBUZ');
    else
       console.log(counter);
}













// for (counter = 1; counter <= 100; counter ++) {
    
//     if ((counter % 3 == 0) && (counter % 5 == 0))
//            console.log('FizzBuzz');
//            else
//     if (counter % 3 == 0)
//            console.log('Fizz');
//            else
//     if ((counter % 3 != 0) && (counter % 5 == 0))
//            console.log('Buzz');
//                 else
//        console.log(counter);
// }