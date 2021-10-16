import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferenceService } from '../services/reference.service';
import { IReference } from '../interfaces/reference.model';

@Component({
  selector: 'app-references',
  templateUrl: './references.page.html',
  styleUrls: ['./references.page.scss'],
})
export class ReferencesPage implements OnInit {

  private references: any[] = [];

  constructor(private referenceService: ReferenceService, private router: Router) { }

  ngOnInit() {
    this.referenceService.getReferences().subscribe(res =>{
      this.references = res;
    });
  }

  ionViewWillEnter(){
    this.referenceService.getReferences().subscribe(res =>{
      this.references = res;
    });
  }

  addNewReference(){
    this.router.navigate(['/new-reference']);
  }

}
