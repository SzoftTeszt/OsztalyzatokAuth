import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  adatok:any
  newName=""
  newGrade:any

  constructor(private base:BaseService){
    this.base.getDatas().snapshotChanges()
    .pipe(
      map( (changes)=>changes.map(
          (c)=>({key:c.payload.key, ...c.payload.val()})
        ) 
        )
    )
    .subscribe(   
       (adat)=> this.adatok=adat
    )
  }

  pushData(){
    let body={name:this.newName, grade:this.newGrade }
    this.base.pushData(body)
  }

  updateData(adat:any){
    this.base.updateData(adat)
  }

  deleteData(adat:any){
    this.base.deleteData(adat)
  }
}
