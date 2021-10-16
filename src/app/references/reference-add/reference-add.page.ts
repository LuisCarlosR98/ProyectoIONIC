import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferenceService } from 'src/app/services/reference.service';
import { IReference } from 'src/app/interfaces/reference.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reference-add',
  templateUrl: './reference-add.page.html',
  styleUrls: ['./reference-add.page.scss'],
})
export class ReferenceAddPage implements OnInit {

  constructor(private referenceService: ReferenceService, private router: Router,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  saveNewReference(title,author,type,journal,doi,year){
    const reference: IReference = {
      id : this.referenceService.generateId(),
      title : title.value,
      authors : author.value,
      type : Number(type.value),
      journal : journal.value,
      doi : doi.value,
      year : year.value
    };
    console.log(reference);
    this.referenceService.addRefe(reference, reference.id).then((_) =>{
      this.presentToast();
    });
    this.router.navigate(['/references']);
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Referencia guardada con exito',
      duration: 2000
    });
    toast.present();
  }

}
