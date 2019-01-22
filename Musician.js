function Musition(_name, _last, _webSite) {
    this.name = _name;
    this.last = _last;
    this.songs = {};
    this.webSite = _webSite;
    this.addSong = function (song) {
        this.songs[song.name] = song;
    }
    this.getSong = function () {
        return this.songs;
    }
}
Musition.prototype.getString = function () {
    return JSON.stringify(this);
}
Musition.prototype.getSongLength = function (x) {
    return this.songs[x].length;
}
Musition.prototype.sumSongLength = function (x) {
    let total = 0;
    Object.keys(this.songs).forEach(function (key) {
        total += this.songs[key].length;
    });
    return total;
}
Musition.prototype.addSec = function (song) {
    this.songs[song].length++;
}
Musition.prototype.getGTx = function (x) {
    return Object.keys(this.songs).filter((song) => this.songs[song].length > x);
}


let test = new Musition("alex", "gnidko", "www.ag.com");
let song = { name: "haha", url: "www.www.com", length: 3.5 };
let song2 = { name: "xxx", url: "www.www.com", length: 3.5 };
let song3 = { name: "yyy", url: "www.www.com", length: 3.8};
let song4 = { name: "ttt", url: "www.www.com", length: 3.9};
test.addSong(song);
test.addSong(song2);
test.addSong(song3);
test.addSong(song4);
// console.log(test.getString())
// console.log(test.getSongLength("haha"))
// console.log(test.sumSongLength())
test.addSec("xxx");
// console.log(test);
// console.log(test.getGTx(3));




let addsecCC = test.addSec.bind(test, "haha");

// addsecCC();
// addsecCC();
// addsecCC();
// addsecCC();
// console.log(test);
console.log(test.getGTx(3.5))
