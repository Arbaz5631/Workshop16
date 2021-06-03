function promise(value) {
    return new Promise(function (resolve, reject) {
        if (value > 18) {
            resolve("Your age is valid !!!!!!!!!!!");
        }
        else {
            reject(new Error("!!! Error , Your age <18"));

        }
    });
}

promise(5).then((data) => {
    console.log(data);
}).catch(err => console.log(err));