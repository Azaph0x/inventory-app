import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { delay, Observable, of } from 'rxjs';
import { ProductDTO, Product } from 'src/app/models/Product';

@Injectable()
export class ProductMockService extends ProductService {

  constructor() { super(); }

  products: Product[] = [];

  public createProduct(product: ProductDTO): Observable<Product> {
    const newObg = {
      id: this.products.length + 1,
      categoryId: product.categoryId,
      barCode: product.barCode,
      description: product.description,
      name: product.name,
      isActivated: true,
      createdAt: new Date().toISOString(),
    }
    this.products.push(newObg)
    return of(newObg);
  }

  public getProduct(): Observable<Product[]> {
    return of(this.products)
  }
}
