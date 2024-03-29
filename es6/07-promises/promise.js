var defer = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('Hello! It works!');
        } else {
            reject('Error!');
        }
    }, 2000);
});

defer
    .then((data) => {
        console.log(data);
        return 'foo';
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));