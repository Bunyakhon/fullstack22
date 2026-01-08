class Media{
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media{
    constructor(songData){
        super(songData);
        this.artist = songData.artist;
        this.copies = songData.copies
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "John Lennon",
    publishDate:1975,
    copies:150000,
});
console.log(mySong.name);
console.log(mySong);