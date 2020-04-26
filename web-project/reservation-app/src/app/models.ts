export class LoginResponse{
    token: string;
}

export class Category {
    id: number;
    name: string;
}

export class Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    categoryId: number;
}

export class Person {
    id: number;
    username: string;
    name: string;
    phone: number;
    password: string;
}

export class Reservation {
    id: number;
    products: Product[];
    date: Date;
    person: Person;
}

export class Manager {
    id: number;
    username: string;
    name: string;
    address: string;
    phone: number;
    email: string;
    age: number;
    gender: string;
    salary: number;
}

export class Order {
    id: number;
    name: string;
    date: Date;
}
