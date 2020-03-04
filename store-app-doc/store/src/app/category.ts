export interface Category {
    id: number;
    name: string;
    products: {
        id: number;
        image: any;
        name: string;
        description: string;
        rating: number;
        img1: any;
        img2: any;
        link: string;
        categoryId: number;
    }[];
}