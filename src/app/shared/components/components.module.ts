import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { ItemProductSkeletonComponent } from './item-product-skeleton/item-product-skeleton.component';
import { ItemMovimentComponent } from './item-moviment/item-moviment.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InputComponent,
    SelectComponent,
    ItemProductComponent,
    ItemProductSkeletonComponent,
    ItemMovimentComponent
  ],
  exports: [
    HeaderComponent,
    InputComponent,
    SelectComponent,
    ItemProductComponent,
    ItemProductSkeletonComponent,
    ItemMovimentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class ComponentsSharedModule { }
