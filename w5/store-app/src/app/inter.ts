export class item{
    id: number;
    name: string;
    description: string;
    rating: number;

    item(name: string, description: string, rating: number){
        this.name = name;
        this.description = description;
        this.rating = rating;
    }
}

export class categ{
    id: number;
    name: string;
    products: item[];
}