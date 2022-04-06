const  foo = async () => {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello");
        }, 2000);
    })

    const resultat = await p1;

    console.log(resultat);
}

foo();