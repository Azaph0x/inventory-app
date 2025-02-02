import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { ProductService } from './services/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private storageService: StorageService,
    private productService: ProductService
  ) {
    storageService.init().then(() => {
      productService.loadProducts().subscribe()
    })
  }
}
