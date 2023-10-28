// let state = null;

// let block = false;

// async function mutateA() {
//     if (!blocked) {
//         blocked = true;
//         await /* asynchronous code */
//             state = 'A';
//         blocked = false;
//     }
// }

// async function mutateB() {
//     if (!blocked) {
//         blocked = true;
//         await /* asynchronous code */
//         state = 'B';
//         blocked = false;
//     }
// }

// This two functions are changing the value of state but don't know which one will update first
// That is example of Race condition
