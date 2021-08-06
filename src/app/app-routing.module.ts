import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ResearchComponent} from './components/research/research.component';
import {AuthGuardService} from "./guards/auth-guard.service";

const routes: Routes = [
  {path: 'home', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'research', component: ResearchComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, ProfileComponent, ResearchComponent];

