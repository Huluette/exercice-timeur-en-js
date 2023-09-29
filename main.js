// function wait(duration) {
//     const t = Date.now()
//     while(Date.now() - t < duration) {

//     }
// }

// console.log('bonjour')

// // wait(1000); Premier test 

// setTimeout (() => {
    
//     console.log('people')
// }, 1000)

// TEST 

// let i = 0

// const t = setInterval(() => {
//     i++
//     console.log('bonjour')

//     if (i >= 5) {
//         clearInterval(t)
//     }
// }, 1000);

// TEST 2 

// function decompte(n) {
//     console.log(n)
//     const t = setInterval(() => {
//     n--
//     console.log(n)
//         if (n === 0) {
//         clearInterval(t)
//     }
// }, 1000)
// }

// decompte(3)

// TEST 3 

// function decompte(n) {
//     // console.log(n)
//     // if (n === 0) {
//     //     return
//     // }
    
//     setTimeout(() => {

//         decompte(n - 1)
//     }, 1000)
// }

// decompte(3)

// TEST 4 

const now = new Date().getTime();
const countdownDate = new Date('September 29, 2023').getTime();

// console.log(now, countdownDate);

const distanceBase = countdownDate - now;

const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
// console.log(days);
const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) /
(1000 * 60 * 60))
const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

// console.log(days, hours, minutes, seconds);