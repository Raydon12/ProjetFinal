import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProReservationService {
  reservationList : Reservation[]
  constructor() {}
$subjectList = new Subject<any>()

  OnRecupList( id : string){

     fetch('https://192.168.0.9:45455/api/Reservations/Pro/'+id)
    .then((response) => response.json())
    .then ((data)=>{this.reservationList = data;this.emitList()})
    .catch((error)=> console.log(error))
    }
emitList()
{
  this.$subjectList.next(this.reservationList)
}

}


export class Reservation{
  dateRes:string
  heureDeb:string
  heureFin:string
  nameCustomer:string
  constructor(DateRes:string,HeureDeb:string,HeureFin:string,NameCustomer:string){
    this.dateRes=DateRes
    this.heureDeb = HeureDeb
    this.heureFin = HeureFin
    this.nameCustomer = NameCustomer
  }
}