import { Product } from './product';

export class ProductRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'Iphone 15',
      price: 85000,
      imageUrl: '1.jpeg',
      description: 'Iphone 15 iyi bir telefondur',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Iphone 14',
      price: 75000,
      imageUrl: '2.jpeg',
      description: 'Iphone 14 iyi bir telefondur',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 3,
      name: 'Iphone 13',
      price: 65000,
      imageUrl: '3.jpeg',
      description: 'Iphone 13 iyi bir telefondur',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 4,
      name: 'Macbook Air',
      price: 85000,
      imageUrl: '1.jpeg',
      description: 'Macbook air aciklama',
      isActive: true,
      categoryId: 2,
    },
    {
      id: 5,
      name: 'Macbook Pro',
      price: 75000,
      imageUrl: '2.jpeg',
      description: 'Macbook pro aciklama',
      isActive: true,
      categoryId: 2,
    },
    {
      id: 6,
      name: 'Lg Smart Tv',
      price: 65000,
      imageUrl: '3.jpeg',
      description: 'Lg Smart Tv aciklama',
      isActive: true,
      categoryId: 3,
    },
  ];

  getProducts(): Product[] {
    return this.products.filter((p) => p.isActive);
  }
  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }
  getProductsByCategoryId(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId == categoryId);
  }
}
