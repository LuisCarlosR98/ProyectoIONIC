import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReference } from 'src/app/interfaces/reference.model';
import { ReferenceService } from 'src/app/services/reference.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-reference-edit',
  templateUrl: './reference-edit.page.html',
  styleUrls: ['./reference-edit.page.scss'],
})
export class ReferenceEditPage implements OnInit {

  ngTitle: string;
  ngAuthor: string;
  ngType: string;
  ngJournal: string;
  ngDoi: string;
  ngYear: string;

  private reference: any;  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private referenceservice: ReferenceService, private alertCtrl: AlertController,
    private toastController: ToastController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const recipeid = paramMap.get('referenceId');
      this.referenceservice.getReference(recipeid).subscribe(res => {
        this.reference = res;
        this.ngTitle = this.reference.title;
;       this.ngAuthor = this.reference.authors;
        this.ngType = this.reference.type;
        this.ngJournal = this.reference.journal;
        this.ngDoi = this.reference.doi;
        this.ngYear = this.reference.year;
      });
    });
  }

  async editReference(title,author,type,journal,doi,year){
    const alertElement = await this.alertCtrl.create({
      header: '¿Desea guardar los cambios?',
      message: 'No podra recuperar los valores anteriores',
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.reference.title = this.ngTitle;
            this.reference.authors = this.ngAuthor;
            this.reference.type = this.ngType;
            this.reference.journal = this.ngJournal;
            this.reference.doi = this.ngDoi;
            this.reference.year = this.ngYear;
            this.referenceservice.addRefe(this.reference, this.reference.id).then((_) =>{
              this.presentToast();
            });
            this.router.navigate(['/references']);
          }
        }
      ]
    });

    alertElement.present();
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Referencia Actualizada con exito',
      duration: 2000
    });
    toast.present();
  }

}
