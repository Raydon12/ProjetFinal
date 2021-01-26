import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   
  constructor() { 

  }

  Post(heureDeb:string,heureFin:string,id:string)
  {
    fetch('https://192.168.0.9:45455/api/Reservations/PostReservation',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({
          userId: id,
          dateRes:heureDeb,
          heureDeb:heureDeb,
          heureFin:heureFin,
          numPersonne:10,
          numPlace:0
      })
  })
  .then((response) => console.log(response.status))
  .catch((error)=> console.log(error))
  }
  
}
