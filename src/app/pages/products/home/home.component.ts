import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subject, take, takeUntil, tap } from 'rxjs';
import { CategoryProduct } from 'src/app/models/CategoryProduct';
import { Product } from 'src/app/models/Product';
import { CategoryProductService } from 'src/app/services/category-product/category-product.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'products-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeProductsComponent implements OnInit, OnDestroy {

  constructor(
    private categoryProductService: CategoryProductService,
    private navCtrl: NavController,
    private productService: ProductService
  ) { }

  loading: boolean = false;

  categoriesProduct: CategoryProduct[] = [];
  products: Product[] = [];

  subjectDestroy: Subject<any> = new Subject();

  ngOnInit() {
    this.categoryProductService.getCategory().pipe(
      takeUntil(this.subjectDestroy),
      tap((r) => {
        this.categoriesProduct = r;
      })
    ).subscribe()
    this.productService.getProduct()
    .pipe(
      // take(0),
      tap((r) => {
        this.products = r;
        this.loading = true;
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.subjectDestroy.next(0);
    this.subjectDestroy.complete();
  }

  createProduct() {
    this.navCtrl.navigateForward(['products', 'create']);
  }
}
