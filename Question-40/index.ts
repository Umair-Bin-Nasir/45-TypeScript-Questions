function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = { artist: artist, title: title, tracks };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Linkin Park", "Meteora");
const album2 = make_album("Ed Sheeran", "Divide", 16);
const album3 = make_album("Taylor Swift", "1989");
console.log(album1);
console.log(album2);
console.log(album3);