import { Category } from './category';

export interface Product {
    id?: number;
    reference: string;
    description: string;
    price: number;
    category: Category;
}
