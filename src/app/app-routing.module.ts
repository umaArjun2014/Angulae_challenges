import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPswComponent } from './forgot-psw/forgot-psw.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
{path: '', component: LoginComponent },
{path: 'dashboard', component: DashboardComponent },
{path: 'ForgotPsw', component: ForgotPswComponent },
{path: 'Login', component: LoginComponent },
{path: 'PageNotFound', component: PageNotFoundComponent},
{path: 'Registration', component: RegistrationComponent},
{path: 'UserInfo', component: UserInfoComponent , canActivate: [AuthGuard] },
{path: 'UserInfo/:id', component: UserInfoComponent , canActivate: [AuthGuard] },
{path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
