export class Song {
    name: string;
    singer: string;
    year: number | null;

    constructor(name: string, singer: string, year: number) {
        this.name = name;
        this.singer = singer;
        this.year = year;
    }
}