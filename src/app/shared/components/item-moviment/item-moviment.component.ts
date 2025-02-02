import { Component, Input, OnInit } from '@angular/core';
import { Moviment } from 'src/app/models/Moviment';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'item-moviment',
  templateUrl: './item-moviment.component.html',
  styleUrls: ['./item-moviment.component.scss'],
  standalone: false
})
export class ItemMovimentComponent  implements OnInit {

  // @Input() product?: Product;

  @Input({ required: true}) moviment!: Moviment;

  constructor() { }

  ngOnInit() {}

}
