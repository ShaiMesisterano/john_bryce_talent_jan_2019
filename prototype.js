// function Computer(size, weight, storageCapacity){
//     var addWeight = 10;
//     this.size = size;
//     this.weight = weight;
//     this.storageCapacity = storageCapacity;
//     this.getNewWeight = function(){
//         addWeight += 10;
//         return this.weight + addWeight;
//     }
//     //return this
//     // return {
//     //     x: 999
//     // }
// }

// // Computer.prototype.upgradeStorageCapacity = function(newCapacity){
// //     this.storageCapacity = newCapacity;
// // }

// Object.prototype.upgradeStorageCapacity = function(){
//     this.storageCapacity = "FROM PROTOTYPE!!!";
// }

// var orsLaptop = new Computer(15, 50, "128GB");
// var orsComuter = new Computer(19, 70, "64GB");

// // console.log("Size is: " + orsLaptop.x);
// // console.log("New Weight Is: " + orsLaptop.getNewWeight());
// orsLaptop.upgradeStorageCapacity("256GB");
// console.log("Capacity is: " + orsLaptop.storageCapacity);


// String.prototype.zigZag = function () {
//     var result = "";
//     for (var i = 0; i < this.length; i++) {
//         if (i % 2 === 0) {
//             result += this[i].toUpperCase();
//         }
//         else {
//             result += this[i].toLowerCase();
//         }
//     }
//     return result;
// }
// console.log("this is a wonderful feature".zigZag());

var food = ["pizza", "hamburger", "sushi"];
// food.forEach(function(item){
//     console.log(item + "!!!");
// })

Array.prototype.myForEach = function(func){
    for (var i=0;i<this.length;i++){
        func(this[i]);
    }
}
food.myForEach(function(item){
    console.log(item + "!!!");
})