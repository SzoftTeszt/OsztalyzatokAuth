import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refData:AngularFireList<any>
  constructor(private db:AngularFireDatabase) { 
    this.refData=db.list("adatok")
  }

  getDatas(){
    return this.refData
  }
  pushData(body:any){
    // let body ={name:"Jáger Attila", grade:4}
    this.refData.push(body)
  }

  deleteData(body:any){
    this.refData.remove(body.key)
  }

  updateData(body:any){
    let key = body.key
    delete body.key
    this.refData.update(key, body)
  }
}
