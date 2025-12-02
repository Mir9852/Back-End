// Promise

// let janji = new Promise((resolve, reject) => {
//     try {
//         resolve("Fulfilled")
//     } catch (err) {
//         reject(err)
//     }
// })
// console.log(typeof janji) // object

// janji.then((value) => {
//     console.log(value) // Fulfilled
// }).catch((err) => {
//     console.log(err)
// })

function janjiManis() {
    return new Promise((resolve, reject) => {
        try {
            resolve("Janji Manis Terpenuhi")
        } catch (err) {
            reject(err)
        }
    })
}

console.log(janjiManis())