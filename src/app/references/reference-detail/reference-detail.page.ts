import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReference } from 'src/app/interfaces/reference.model';
import { ReferenceService } from 'src/app/services/reference.service';
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-reference-detail',
  templateUrl: './reference-detail.page.html',
  styleUrls: ['./reference-detail.page.scss'],
})
export class ReferenceDetailPage implements OnInit {

  private reference: any;
  private authorsCol: string[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private referenceservice: ReferenceService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const recipeid = paramMap.get('referenceId');
      this.referenceservice.getReference(recipeid).subscribe(res => {
        this.reference = res;
        this.authorsCol = String(this.reference.authors).split(',');
      });
    });
  }

  async deleteReference(){
    const alertElement = await this.alertCtrl.create({
      header: '¿Realmente desea eliminar la referencia?',
      message: 'No podra recuperarla',
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.referenceservice.deleteReference(this.reference.id);
            this.router.navigate(['/references']);
          }
        }
      ]
    });

    alertElement.present();
  }

  editReference(){
    const route = '/edit-reference/'+this.reference.id;
    this.router.navigate([route]);
  }

}
