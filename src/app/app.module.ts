import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AnimalRegisterComponent } from './pages/animal-register/animal-register.component';
import { ClinicalHistoryComponent } from './pages/clinical-history/clinical-history.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HealthRecordComponent } from './pages/health-record/health-record.component';
import { VisitRecordComponent } from './pages/visit-record/visit-record.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AnimalRegisterComponent,
    ClinicalHistoryComponent,
    ReportsComponent,
    HomeComponent,
    HeaderComponent,
    HealthRecordComponent,
    VisitRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
