class Technology {
    constructor() {
        this.keyWords = ["for", "if", "switch"];
        this.startsWithF = [];
    }
    print(){
        // Not working
        // this.keyWords.forEach(function(keyword){
        //     if (keyword[0] === "f"){
        //         this.startsWithF.push(keyword);
        //     }
        // });
        // bind
        // this.keyWords.forEach(function(keyword){
        //     if (keyword[0] === "f"){
        //         this.startsWithF.push(keyword);
        //     }
        // }.bind(this));
        // arrow function
        this.keyWords.forEach(keyword => {
            if (keyword[0] === "f"){
                this.startsWithF.push(keyword);
            }
        });
        console.log(JSON.stringify(this.startsWithF));
    }
}

let react = new Technology();
react.print();