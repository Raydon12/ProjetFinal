import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PremierComponentComponent } from './component/login/login.component';
import { SecondComponentComponent } from './component/add-date/add-date.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ReservationComponent } from './component/reservation/reservation.component';
import {MatTableModule} from '@angular/material/table';
import { PostService } from './service/ProCalendar/post.service';
import { ProReservationService } from './service/pro-reservation.service';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PremierComponentComponent,
    SecondComponentComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'},AuthService,PostService,ProReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
