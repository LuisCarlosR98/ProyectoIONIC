import { Injectable } from '@angular/core';
import { IReference } from '../interfaces/reference.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  private path: string = 'references';
  private references: IReference[] =  [
    {
      id: '1',
      title: 'Referencia 1',
      authors: 'autor1,autor2',
      type: 2,
      journal: 'journal 1',
      doi: '12.3424.434',
      year: 2010,
    },
  ];

  constructor(private angularFirestore: AngularFirestore) { }

  getReferences<IReference>(): Observable<IReference[]>{
    const ref = this.angularFirestore.collection<IReference>(this.path);
    return ref.valueChanges();
  }

  getReference<IReference>(id: string): Observable<IReference>{
    const itemDoc = this.angularFirestore.collection<IReference>(this.path);
    return itemDoc.doc(id).valueChanges();
  }

  addRefe<IReference>(reference: IReference, id: string){
    const ref = this.angularFirestore.collection<IReference>('/references');
    return ref.doc(id).set(reference);
  }

  deleteReference(id: string){
    const ref = this.angularFirestore.collection<IReference>('/references');
    return ref.doc(id).delete();
  }


  //Auxiliar Methods
  public generateId(){
    return this.angularFirestore.createId();
  }
}
