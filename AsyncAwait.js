let saludar = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Hola');
        }, 3000);
    });
}

// let saludarP = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Hola')
//     })
// }

// saludar().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('ERROR', err);
// })

let ejemplo = async() => {

    let saludo = await saludar();

    console.log(saludo);

}

ejemplo();