export class Movie {
    id: number;
    name: string;
    thumb: string;

    constructor(id: number, name: string, thumb: string) {
        this.id = id;
        this.name = name;
        this.thumb = thumb;
    }
}