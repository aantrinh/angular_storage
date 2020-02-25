import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from 'src/_core/services/guards/auth.guard';


const routes: Routes = [
  {
    path:'',
    component:AdminComponent
  },
  {
    path:'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    // kiem tra guard cho dashboard
    canActivate:[AuthGuard]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
