import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  token : Boolean



  constructor(public authService:AuthService){
    
  }
  ngOnInit(){
    this.authService.$subjectToken.subscribe(
      /*.next*/(token) => { this.token = token},
      /*.complete*/() => {},
      /*.finlly*/() => {}
    )
  }
  LogOut(){
  this.authService.LogOut()
  }
  title = 'forum-angular'; 
  

}
