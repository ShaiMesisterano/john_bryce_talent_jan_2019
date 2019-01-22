// var iceCream = {
// 	name: "Vanilla",
// 	flavours: ["Sweet", "Salty"],
// 	getName: function(){
// 		console.log(this.name + "," + this.flavours);
// 	}
// }

// iceCream.getName();

// iceCream.getName.call({
// 	name: "Chocolate"
// });

// function printStr(){
// 	console.log(this.str);
// }
// printStr.call({str: "blah"});

// window.str = "Hello"
// function printStr(){
// 	console.log(this.str);
// }
// window.printStr();

// function sum(x,y) {
//     console.log(x + y);
// }
// var obj = {
//     suffix: "!!!"
// }
// sum.call(obj, 1,2);
// var arr = [1,2]
// sum.apply(obj, arr);
// var addOne = sum.bind(this, 1);
// console.log(addOne(77));

function printStrings(str1, str2){
    console.log(str1 + " " + str2);
}
// printStrings("Hello", "World");
var addWord = printStrings.bind(this, "Ma");
addWord("Nishma?");