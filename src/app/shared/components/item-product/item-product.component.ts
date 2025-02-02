import { Component, Input, input, OnInit } from '@angular/core';
import { ActionSheetController, NavController, PopoverController } from '@ionic/angular';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
  standalone: false
})
export class ItemProductComponent  implements OnInit {

  @Input({ required: true }) product!: Product;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {}


  showMoreOptions() {
    this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Visualizar',
          handler: () => {
            this.navCtrl.navigateForward(['products', 'view', this.product.id]);
          }
        },
        {
          text: 'Editar',
          handler: () => {
            this.navCtrl.navigateForward(['products', 'edit', this.product.id]);
          }
        },
        {
          text: 'Excluir',
          role: 'destructive',
          handler: () => {}
        },
        {
          text: 'Fechar',
          role: 'cancel',
          handler: () => {}
        }
      ]
    }).then((r) => r.present())
  }

}
