import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { delay, Observable, of } from 'rxjs';
import { ProductDTO, Product } from 'src/app/models/Product';
import { STORAGE_KEYS, StorageService } from '../storage.service';

@Injectable()
export class ProductMockService extends ProductService {

  constructor(
    private storageService: StorageService
  ) { super(); }

  products: Product[] = [];

  loadProducts(): Observable<Product[]> {
    const productsResponse = this.storageService.getProducts();
    this.products = productsResponse;

    return of(productsResponse);
  }

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

    this.products.push(newObg);
    this.storageService.saveProduct(newObg);

    return of(newObg);
  }

  public getProduct(): Observable<Product[]> {
    return of(this.products)
  }

  public getProductById(id: number): Observable<any> {
    const product = this.products.find(p => p.id == id);
    if(product) return of(product);
    return of({
      error: 'Product not found'
    })
  }

  public updateProduct(product: Product): Observable<any> {
    const findIndex = this.products.findIndex(p => p.id == product.id);
    if(findIndex == -1) return of({ error: 'Product not found' })
    const newProduct = {
      ...this.products[findIndex]!,
      ...product,
    }
    this.products[findIndex] = newProduct;
    return of(newProduct);
  }
}
