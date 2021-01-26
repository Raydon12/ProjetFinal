import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// https://appservicepickup.azurewebsites.net/api/Auth/Login
  token : Boolean 
  tokenValue : string
  id : string
  $subjectToken = new Subject<Boolean>()
  $subjectTokenValue = new Subject<string>();

  constructor() { 
    this.token=false
  }

  emitToken()
  {
    this.$subjectToken.next(this.token)
  }

  emitTokenValue()
  {
    this.$subjectTokenValue.next(this.tokenValue)
  }

  Login()
  {
    this.token = true
    this.emitToken()
    this.emitTokenValue()
    const decoded = jwt_decode(this.tokenValue.slice(7))
    this.id = decoded['UserId']
    console.log(this.id)

  }


  LogOut()
  {
    this.token=false
    this.emitToken()
  }

  Fetch(login:string,password:string)
  {
    fetch('https://192.168.0.9:45455/api/User/Login',{
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({
          email: login,
          password: password
      })
  })
  .then((response) => response.json())
  .then ((data)=>{this.tokenValue = data.token;this.Login()} )
  .catch((error)=> console.log(error))
  }
}
