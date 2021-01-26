import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PremierComponentComponent } from './component/login/login.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { SecondComponentComponent } from './component/add-date/add-date.component';

const routes: Routes = [
  {path:'addDate',component:SecondComponentComponent},
  {path:'Login',component:PremierComponentComponent},
  {path:'Reservation',component:ReservationComponent},
  {path:'Home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
