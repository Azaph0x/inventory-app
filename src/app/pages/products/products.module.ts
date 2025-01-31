import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomeProductsComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { ItemProductSkeletonComponent } from './components/item-product-skeleton/item-product-skeleton.component';
import { CreateProductComponent } from './create/create.component';
import { ComponentsSharedModule } from 'src/app/shared/components/components.module';
import { ItemProductComponent } from './components/item-product/item-product.component';

@NgModule({
  declarations: [
    HomeProductsComponent,
    ItemProductSkeletonComponent,
    CreateProductComponent,
    ItemProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ProductsRoutingModule,
    ComponentsSharedModule
  ]
})
export class ProductsModule { }
