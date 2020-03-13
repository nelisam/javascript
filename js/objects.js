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

// let cake = {
//     flavor: "chocolate",
//     price: "R 159,99",
//     layer: "single",
//     occasion: "Birthday"
// };

// console.log(cake.flavor);
// console.log(cake.price);
// console.log(cake.layer);
// console.log(cake.occasion);
// console.log("The"+" " +cake.flavor+ " "+ "It cost "+" "+cake.price+" "+ "It is for a" +" " +cake.occasion+" "+ "party."+" " )

// Changing the properties 

// cake.occasion = "wedding";
// cake.layers = "1+3";
// cake.price = "R 389, 99"

// function describe(cake) {
//     var description = "The " +cake.occasion+ " cake has a " +cake.flavor+ " flavor, " +cake.layer+ " layers, and costs " +cake.price+ ".";
//     return description;
// }

// console.log(describe(cake));



// let mavenClass = {
//     student1: 'Sharon',
//     student2: 'Alex',
//     student3: 'Nelisa',
//     student4: 'Zee',
//     student5: 'Jean',
//     student6: 'Baki',
//     student7: 'Gordon',
//     student8: 'Andrew',

//     describe: function (){
//         let absent = "Today only "+ this.student8+ " "+ "is absent.";
//         return absent;
//     }
// }
//    console.log(mavenClass.describe());

    // let movies = {
    //     title: "Chicago",
    //     genre: "musical",
    //     year: "2003",

    //     describe: function(){
    //         let favourite = "The movie " +this.title+ " is my favourite movie of all time. It is a " +this.genre+ " made in "+this.year+ " and is set in Chicago, US. ";
    //         return favourite;
    //     }
    // }
     
    // console.log(movies.describe());


// var bottle = {
//     color : "blue",
//     height: "12cm",
//     cap :"black",

// };

// console.log(bottle);


// let cake = {
//     flavour : "Chocolate Garnash",
//     price: "R2500",
//     layers :"3 tier",
//     Occassion : "21st Birthday Party",
// };

// console.log("On my" +" "+ cake.Occassion+ " "+ "I bought a " + cake.flavour+" "+ "cake worth "+ cake.price+" "+"and it was a "+cake.layers +" "+ "cake.");


// cake.Occassion= "1st Wedding";
// cake.layers= "5 tier";
// cake.price= "R6000";

// console.log("On my" +" "+ cake.Occassion+ " "+ "I bought a " + cake.flavour+" "+ "cake worth "+ cake.price+" "+"and it was a "+cake.layers +" "+ "cake.");

// var cake = {
//     flavour : "Chocolate Garnash",
//     price: "R2500",
//     layers :"3 tier",
//     Occassion : "21st Birthday Party",
// }


//  the function 
// function describe (){
//     let description = " The" +" "+ cake.Occassion+ " "+ "cake, " + "which is " + cake.flavour+" "+ "is worth "+ cake.price+" "+"and it is a "+cake.layers;

//     return description;
// }

// console.log(describe());


// let cake = {
//     flavour : "Chocolate Garnash",
//     price: "R2500",
//     layers :"3 tier",
//     occassion : "21st Birthday Party",
//     describe: function (){
//         let description = " The" +" "+ this.
//         occassion+ " "+ "cake, " + "which is " + this.flavour+" "+ "is worth "+ this.price+" "+"and it is a "+this.layers;
    
//         return description;
//     }
// };

//console.log(cake.describe());

// let car = {
//     model : "cruze",
//     year : "R 150",
//     type : "chevrolet",
//     describe: function (){
//         let description =  "the" +" "+ this.model+ " "+ "is discontiued";

//         return description;

//     }

// };

// console.log(car.describe());



// OBJECT PROTOTYPES

// var anObject = {
//     a:2
// };

// var anotherObject = Object.create(anObject);

// console.log(anotherObject.a);
// console.log(anotherObject.b);


// Create object pastry

// let Pastry = {
//     type: "",
//     flavor: "",
//     layer: 0,
//     price: "",
//     occassion: "",


// //Describe the pastry

//     describe: function(){
//         let description = " The" +" "+ this.
//         occassion+ " "+ "cake, " + "which is " + this.flavor+" "+ "is worth "+ this.price+" "+"and it is a "+this.layers+ " tier.";
    
//         return description;
//     }
// };

// let muffin = Object.create(Pastry);
// muffin.type = "muffin";
// muffin.flavor = "blueberry";
// muffin.layers = 1;
// muffin.price = "R20";
// muffin.occassion = "breakfast";

// let cake = Object.create(Pastry);
// cake.type = "cake";
// cake.flavor = "chocolate";
// cake.layers = 2;
// cake.price = "R60";
// cake.occassion = "snack";

// //Describe
// //IT'S VERY IMPORTANT that you add parenthesis after the describe, to call the function.

// console.log (muffin.describe());
// console.log (cake.describe());

// initialize the pastry this is the same as the prototype we have above. 
// var Pastry = {
// init: function(type, flavor, layer, price, occassion) {
//     this.type = type;
//     this.flavor = flavor;
//     this.layer = layer;
//     this.price = price;
//     this.occassion = occassion;
// },

//      describe: function(){
//         let description = " The" +" "+ this.
//         occassion+ " "+ "cake, " + "which is " + this.flavor+" "+ "is worth "+ this.price+" "+"and it is a "+this.layer+ " tier.";
    
//         return description;
//    }

// //    bake: function(){
// //       let baked=  "The "+ this.type+ " Is placed in the oven for "+ time();
// //       return baked
// //    } 
//  };

//  let muffin = Object.create(Pastry);
//  muffin.init("Muffin", "Choc", 3, "R480", " St Patrick's Day ");

//  let donut = Object.create(Pastry);
//  donut.init("Donut", "Cinnamon Sugar",1,"R 10,99","Snack");

 
//  //console.log (muffin.describe());
//  console.log (donut.describe());




 //CONSTRUCTOR FUNCTIONS INSTEAD OF OBJECT PROTOTYPES.


 function Pastry(type, flavor, layer, price, occassion){
    this.type= type;
    this.flavor= flavor;
    this.layer = layer;
    this.price = price;
    this.occassion = occassion;
 };

 Pastry.prototype.describe = function(){
     let description = " The" +" "+ this.occassion+ " "+ "cake, " + "which is " + this.flavor+" "+ "is worth "+ this.price+" "+"and it is a "+this.layer+ " tier.";
 
     return description;
};

// Pastry.prototype.eat = function(){
//     var eaten = " Pick up " + this.type+ " and chug it down instantly ";
//     return eaten;
// };
let muffin= new Pastry("Muffin", "Choc", 3, "R480", " St Patrick's Day ");
//let muffin = new Pastry("Muffin", "Choc", 3, "R480", " St Patrick's Day ");

console.log(muffin);
//console.log(muffin.describe());

function Lewis(type, wood, price, dimensions, image){
    this.type= type;
    this.wood= wood;
    this.price= price;
    this.dimensions = dimensions;
    this.image = image;
 };

 Lewis.prototype.describe = function(){
     let description = "This "+this.wood+" " +this.type+" costs "+ this.price+ " and its dimensions are "+ this.dimensions+ " Have a look "+ this.image;
 
     return description;
};


let Chair = new Lewis("Chair", "Brazilian Mahogany", " R45 000", "20x20", "https://cdn.shopify.com/s/files/1/1551/9675/products/012P-FUME4902002-carved-mahogany-sphinx-throne-chair_1024x1024.jpg?v=1572362045")

let Bed = new Lewis("Queen Bed", "Brazilian Mahogany", " R85 000", "200x200", "https://www.mayfairgallery.com/media/catalog/product/1/6/16065c-antique-louis-xvi-style-ormolu-mounted-mahogany-bed-1-2000x.jpg")

let Couch = new Lewis("Couch", "Brazilian Mahogany", " R35 000", "200x200", "https://www.mayfairgallery.com/media/catalog/product/1/6/16065c-antique-louis-xvi-style-ormolu-mounted-mahogany-bed-1-2000x.jpg")

let Table = new Lewis("Table", "Brazilian Mahogany", " R95 000", "200x200", "https://www.mayfairgallery.com/media/catalog/product/1/6/16065c-antique-louis-xvi-style-ormolu-mounted-mahogany-bed-1-2000x.jpg")

let Stand = new Lewis("TV Stand", "Brazilian Mahogany", " R10 000", "200x200", "https://www.mayfairgallery.com/media/catalog/product/1/6/16065c-antique-louis-xvi-style-ormolu-mounted-mahogany-bed-1-2000x.jpg")

console.log(Chair.describe());
console.log(Bed.describe());
console.log(Couch.describe());
console.log(Table.describe());
console.log(Stand.describe());


