// Things you can see, feel or touch , has different properties. example of a car below.

// let car = {
//     type: "Chevrolet",
//     model: "Cruze",
//     color:"black",
//     year: "2011"
// };

// console.log(car.type);
// console.log(car.model);
// console.log(car.color);
// console.log(car.year);
// console.log("I drive a" + " " +car.type);
// Question answered
/*you can also use const to edit the properties on the inside. 
However if you try and change "cake" which is on the inside it won't be allow you 
because cake has alredy been declared.*/

// const cake = {
//     flavor: "chocolate",
//     price: "R 159,99",
//     layer: "Single",
//     occasion: "Birthday"
// };

let cake = {
    flavor: "chocolate",
    price: "R 159,99",
    layer: "single",
    occasion: "Birthday"
};

// console.log(cake.flavor);
// console.log(cake.price);
// console.log(cake.layer);
// console.log(cake.occasion);
// console.log("The"+" " +cake.flavor+ " "+ "It cost "+" "+cake.price+" "+ "It is for a" +" " +cake.occasion+" "+ "party."+" " )

// Changing the properties 

// cake.occasion = "wedding";
// cake.layers = "1+3";
// cake.price = "R 389, 99"

function describe(cake) {
    var description = "The " +cake.occasion+ " cake has a " +cake.flavor+ " flavor, " +cake.layer+ " layers, and costs " +cake.price+ ".";
    return description;
}

console.log(describe(cake));

