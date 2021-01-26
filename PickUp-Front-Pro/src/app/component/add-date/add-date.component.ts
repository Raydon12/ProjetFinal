import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDateRangeInput } from '@angular/material/datepicker';
import {MatStepperModule} from '@angular/material/stepper';
import { AuthService } from 'src/app/service/auth.service';
import { PostService } from 'src/app/service/ProCalendar/post.service';
import jwt_decode, { JwtPayload } from 'jwt-decode';


@Component({
  selector: 'app-second-component',
  templateUrl: './add-date.component.html',
  styleUrls: ['./add-date.component.scss']
})
export class SecondComponentComponent implements OnInit {
  date : string
  id: string
  token : string
  decoded : object
  hours : string[] =
  [
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
    "17:00-18:00",
  ]
  form: FormGroup
  select:string
  constructor(private postService : PostService, public authService : AuthService)
   {
    this.id = authService.id
   }

  // ngOnInit(){
  //    this.authService.$subjectTokenValue.subscribe(
  //     /*.next*/(token) => { this.token = token},
  //     /*.complete*/() => {},
  //     /*.finlly*/() => {}
  //   )
  //   this.token =  this.authService.tokenValue
  //   this.decoded = jwt_decode(this.token.slice(7));
  //   this.id = this.decoded['UserId']
    
  // }
  ngOnInit(){
    
  }
  updateDoB(dateObject)
  {
    this.date = new DatePipe('en').transform(dateObject.value,'yyyy-MM-dd')
    
  }
  onSubmit(){ 
    const str = this.select.slice(6)
    const str1 = this.select.slice(0,5)
    const heureDeb = this.date+"T"+str1+":00.000Z"
    const heureFin = this.date+"T"+str+":00.000Z"
    const id = this.id
    this.postService.Post(heureDeb,heureFin,id)
    alert('modifications prise en compte'+ id)
   

  }

}
