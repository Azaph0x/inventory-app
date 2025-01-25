import { Injectable } from '@angular/core';
import { CategoryProductService } from './category-product.service';
import { Observable, of } from 'rxjs';
import { CategoryProduct } from 'src/app/models/CategoryProduct';

@Injectable()
export class CategoryProductMockService extends CategoryProductService {

  productCategories: CategoryProduct[] = [
    { id: 1, name: "Eletrônicos" },
    { id: 2, name: "Vestuário" },
    { id: 3, name: "Alimentos" },
    { id: 4, name: "Móveis" },
    { id: 5, name: "Esportes" },
    { id: 6, name: "Livros" },
    { id: 7, name: "Beleza" },
    { id: 8, name: "Brinquedos" },
    { id: 9, name: "Ferramentas" },
    { id: 10, name: "Automotivo" }
  ];


  constructor() { super(); }

  public getCategory(): Observable<CategoryProduct[]> {
    return of(this.productCategories)
  }

}
