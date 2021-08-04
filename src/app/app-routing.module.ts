import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './component/profile/profile.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ResearchComponent} from './component/research/research.component';


const routes: Routes = [
  {path: 'home', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'research', component: ResearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, ProfileComponent, ResearchComponent];

