Musician.prototype.getSongsLongerThen = function (length) {
    return Object.keys(this.songs).map(key => ({ ...this.songs[key], name: key })).filter(song => song.songLength > length);
}

Musician.prototype.getSortedSongs = function (length) {
    return Object.keys(this.songs).map(key => ({ ...this.songs[key], name: key })).sort((songA, songB) => songA.songLength > songB.songLength);
}