import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { take, tap } from 'rxjs';
import { CategoryProduct } from 'src/app/models/CategoryProduct';
import { CategoryProductService } from 'src/app/services/category-product/category-product.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: false
})
export class CreateProductComponent  implements OnInit {

  constructor(
    private CategoriesProducts: CategoryProductService,
    private producService: ProductService,
    private navCtrl: NavController
  ) { }

  form!: FormGroup;

  options: CategoryProduct[] = [];

  ngOnInit() {
    this.CategoriesProducts.getCategory().pipe(
      take(1),
      tap((r) => this.options = r)
    ).subscribe()
    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.required]),
      description: new FormControl(''),
      barCode: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required])
    })
  }

  getControl(controlName: string) {
    return this.form.controls[controlName] as any;
  }

  submit() {
    if(this.form.invalid) return;
    this.producService.createProduct({
      ...this.form.value
    }).pipe(
      tap(() => {
        this.navCtrl.navigateRoot(['tabs', 'products']);
      })
    ).subscribe();
  }
}
