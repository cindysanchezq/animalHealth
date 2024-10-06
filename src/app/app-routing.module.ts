import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AnimalRegisterComponent } from './pages/animal-register/animal-register.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ClinicalHistoryComponent } from './pages/clinical-history/clinical-history.component';
import { HealthRecordComponent } from './pages/health-record/health-record.component';
import { VisitRecordComponent } from './pages/visit-record/visit-record.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'}, //Redirecciona a home cuando la ruta esta vacia
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'animalRegister', component:AnimalRegisterComponent},
  {path: 'reports', component: ReportsComponent},
  {path:'clinicalHistory', component: ClinicalHistoryComponent},
  {path: 'healthRecord', component:HealthRecordComponent},
  { path: 'visitRecord/:idAnimal/:idVisita', component: VisitRecordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
