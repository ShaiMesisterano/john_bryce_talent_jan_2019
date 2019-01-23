// const sum = (x,y,z,m,n) => x+y+z+m+n;
// console.log(sum(1,2,3,4,5));

// spread
// const sum = (...numbers) => {
//     let result = 0;
//     for (number of numbers) {
//         result += number;
//     }
//     return result;
// };
// console.log(sum(1,2,3,4,5));

// rest
const iPhone = {
    version: 8,
    color: "white",
    os: {
        version: 10,
        author: "Apple"
    }
}

const printPhone = () => {
    // const phone = {...iPhone}; // { version: 8, color: "white", os: "iOS" }
    // const os = {...iPhone.os};
    // phone.os = os;
    const phone = JSON.parse(JSON.stringify(iPhone));
    // const phone = iPhone;
    iPhone.color = "black";
    iPhone.os.version = 20;
    console.log(JSON.stringify(phone));
}
printPhone();

// const colors = ['white', 'black', 'grey'];
// const printColors = () => {
//     // const phoneColors = colors; // assignment to reference
//     // const phoneColors = [...colors]; // clone using rest
//     const phoneColors = colors.concat();
//     colors[0] = 'red';
//     for (let phoneColor of phoneColors){
//         console.log(phoneColor);
//     }
// }
// printColors();