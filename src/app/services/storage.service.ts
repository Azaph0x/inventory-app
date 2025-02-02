import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Product } from '../models/Product';

export enum STORAGE_KEYS {
  PRODUCTS = 'products',
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private products: Product[] = [];

  constructor(
    private storage: Storage
  ) { }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    await this.load();
  }

  private async load() {
    const responseProducts = await this.get(STORAGE_KEYS.PRODUCTS) ?? [];
    this.products = responseProducts;
    if (!responseProducts.length) {
      this.storage.set(STORAGE_KEYS.PRODUCTS, []);
    }
  }

  set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  getProducts() {
    return this.products;
  }

  async saveProduct(product: Product) {
    const products = await this.get(STORAGE_KEYS.PRODUCTS) as Product[] ?? [];
    products.push(product);
    this._storage?.set('products', products);
    this.products = products;
  }

  async updateProduct(product: Product) {
    const products = await this.get(STORAGE_KEYS.PRODUCTS) as Product[] ?? [];
    const index = products.indexOf(product);
    if(index != -1) {
      products[index] = {
        ...this.products[index],
        ...product
      };
      this._storage?.set('products', products);
      this.products = products;
    }
  }


  get(key: string) {
    return this._storage?.get(key)
  }
}
