import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDTO } from 'src/app/models/Product';

export abstract class ProductService {

  public abstract getProduct(): Observable<Product[]>;
  public abstract createProduct(product: ProductDTO): Observable<Product>;

}
