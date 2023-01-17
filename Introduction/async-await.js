// using promises
// const printA = new Promise((resolve, reject) => {
//     resolve("a");
// });

// const printB = printA.then((msg) => {
//     console.log(msg);
//     return new Promise((resolve, reject) => {
//         resolve("b");
//     })
// })

// const printC = printB.then((msg) => {
//     console.log(msg);
//     return new Promise((resolve, reject) => {
//         resolve("c");
//     })
// });

// const printD = printC.then((msg) => {
//     console.log(msg);
//     console.log("d");
//     console.log("e");
// });


// async-await
const printer = async() => {
    const aprinter = new Promise((resolve, reject) => {
        resolve("a");
    });const bprinter = new Promise((resolve, reject) => {
        resolve("b");
    });const cprinter = new Promise((resolve, reject) => {
        resolve("c");
    });const dprinter = new Promise((resolve, reject) => {
        resolve("d");
    });const eprinter = new Promise((resolve, reject) => {
        resolve("e");
    });

    const a = await aprinter;
    const b = await bprinter;
    const c = await cprinter;
    const d = await bprinter;
    const e = await eprinter;
    
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}

printer();