import { Component, Input, input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
  standalone: false
})
export class ItemProductComponent  implements OnInit {

  @Input({ required: true }) product!: Product;

  constructor() { }

  ngOnInit() {}

}
