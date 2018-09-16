
    let colors = ["blue", "white", "red", "black", "yellow", "silver"];
    let series = ["1","2","3","4","5","6","7","8","X1","X2","X3","X4","X5","X6","Z4","i3","i8"];
//     let bmw = [
//     {
//     type: "sedan",
//     year: "2016",
//     title: "clean",
//     price: 45000
//     },
// ];


const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint
};


const car_color = () => 
    let newString ='';
    for (let i=0; i < colors.length; i++) {
        newString += `<div id="output">`;
        newString += `<p>${colors[i]}</p>`;
        newString += `</div>`; 
    }
    printToDom(newString,"output");
}


car_color();
