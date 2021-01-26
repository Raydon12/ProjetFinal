import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-premier-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class PremierComponentComponent implements OnInit {
  registerForm : FormGroup
  submitted = false
  token = ''
  constructor( private formBuilder : FormBuilder , private authService : AuthService, private router:Router ) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      login:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onSubmit(){
    const form = this.registerForm.value
    const login = form['login']
    const password = form['password']
    this.submitted = true;
    this.authService.Fetch(login,password)

  this.onReset()
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset()
    this.router.navigate(['/Home'])
    
  }

}
