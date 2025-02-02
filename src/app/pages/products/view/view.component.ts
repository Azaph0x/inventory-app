import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { tap } from 'rxjs';
import { Moviment } from 'src/app/models/Moviment';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  standalone: false
})
export class ViewProductComponent  implements OnInit {

  product!: Product;

  movimentMock: Moviment = {
    createdAt: new Date().toISOString(),
    dateValidate: '10/02/2025',
    entry: true,
    id: 1,
    productId: 1,
    quantity: 10,
    supplierId: 1,
    value: 1000
  }

  movimentMockLeave: Moviment = { ...this.movimentMock, entry: false}

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(!params['id']) {
      this.navCtrl.navigateRoot(['tabs', 'products']);
      return;
    }
    this.productService.getProductById(Number(params['id'])).pipe(tap((r) => {
      this.product = r;
    })).subscribe()

  }

}
