import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryProduct } from 'src/app/models/CategoryProduct';

export abstract class CategoryProductService {

  public abstract getCategory(): Observable<CategoryProduct[]>;

}
