import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subject, takeUntil, tap } from 'rxjs';
import { CategoryProduct } from 'src/app/models/CategoryProduct';
import { CategoryProductService } from 'src/app/services/category-product/category-product.service';

@Component({
  selector: 'products-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeProductsComponent implements OnInit, OnDestroy {

  constructor(
    private categoryProductService: CategoryProductService,
    private navCtrl: NavController
  ) { }

  loading: boolean = false;

  categoriesProduct: CategoryProduct[] = [];
  subjectDestroy: Subject<any> = new Subject();

  ngOnInit() {
    this.categoryProductService.getCategory().pipe(
      takeUntil(this.subjectDestroy),
      tap((r) => {
        this.categoriesProduct = r;
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
