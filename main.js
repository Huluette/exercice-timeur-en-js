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

function decompte(n) {
    console.log(n)
    const t = setInterval(() => {
    n--
    console.log(n)
        if (n === 0) {
        clearInterval(t)
    }
}, 1000)
}

decompte(5)