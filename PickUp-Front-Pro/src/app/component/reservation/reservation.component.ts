import { Component, OnInit } from '@angular/core';
import { ProReservationService, Reservation } from 'src/app/service/pro-reservation.service';
import {MatPaginator} from '@angular/material/paginator';
import { AuthService } from 'src/app/service/auth.service';
import jwt_decode  from 'jwt-decode'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  list:Reservation[]
  token : string
  decoded : string
  id : string
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private proService:ProReservationService, public authService : AuthService ) {
    this.list = this.proService.reservationList
    this.token = this.authService.tokenValue
   
   }

  ngOnInit(){
    this.authService.$subjectTokenValue.subscribe(
     (token) => { this.token = token})
    const decoded = jwt_decode(this.token.slice(7));
    const id = decoded['UserId']
    this.proService.OnRecupList(id)
    this.proService.$subjectList.subscribe(
      (list)=>{this.list = list})
  }

}
