// array
var studentsArr = [
    {name: "Or", age: 24, hobby: "surfing"},
    {name: "Lior", age: 21, hobby: "dancing"},
    {name: "Shai", age: 33, hobby: "teaching"}
];

// object
var studentsObj = {
    "Or": {
        age: 24,
        hobby: "surfing"
    },
    "Lior": {
        age: 21,
        hobby: "dancing"
    },
    "Shai": {
        age: 33,
        hobby: "teaching"
    }
}

function searchAgeByName(name) {
    // array
    for (var i=0;i<studentsArr.length;i++){
        if (studentsArr[i].name === name) return studentsArr[i].age;
    }
    return null;
    // object
    return studentsObj[name].age;
}