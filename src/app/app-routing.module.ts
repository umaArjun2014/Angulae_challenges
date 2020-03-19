import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
{path: '', loadChildren: () => import('./modules/login-module/login-module.module').then(m => m.LoginModuleModule) },
{
  path: 'dashboard',
  loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
},
{path: '**', loadChildren: () => import('./modules/pnf/pnf.module').then(m => m.PNFModule)}

// {path: 'forgotPsw', component: ForgotPswComponent },
// {
//   path: 'login',
//   component: LoginComponent
// },
// {path: 'pageNotFound', component: PageNotFoundComponent},
// {path: 'registration', component: RegistrationComponent},
// {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
// {path: 'getUserData', component: HttpReqComponent, canActivate: [AuthGuard]},
// {path: 'userInfo', component: UserInfoComponent , canActivate: [AuthGuard] },
// {path: 'userInfo/:id', component: UserInfoComponent , canActivate: [AuthGuard] },

// {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
