let BMW_car = {
    benz: ["c300", "S500", "gla250"],
    color: "blue",
    model: "bmw",
    size: "sedan",
    year: 2016,
    origin: "germany",
    title: "clean",
    price: 45000
};
    // What is this? Is it an array?

    // const printcar = () => {

    //     let str ="";
    //     str += `<p>${car.model}</p>`;
    //     str += `<p>${car.size}</p>`;

    //     str += `<p>${car.benz[1]}</p>`;

    //     document.getElementById("output").innerHTML=str;
    // }

    // printcar();

    
    const printcar = (car) => {

        let str ="";
        str += `<p>${car.model}</p>`;
        str += `<p>${car.size}</p>`;

        str += `<p>${car.benz[1]}</p>`;

        document.getElementById("output").innerHTML=str;
    }

    printcar(BMW_car);

