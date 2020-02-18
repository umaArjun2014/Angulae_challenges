import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPswComponent } from './forgot-psw/forgot-psw.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { HttpReqComponent } from './http-req/http-req.component';


const routes: Routes = [
{path: '', component: LoginComponent },
{path: 'dashboard', component: DashboardComponent },
{path: 'forgotPsw', component: ForgotPswComponent },
{path: 'login', component: LoginComponent },
{path: 'pageNotFound', component: PageNotFoundComponent},
{path: 'registration', component: RegistrationComponent},
{path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
{path: 'getUserData', component: HttpReqComponent, canActivate: [AuthGuard]},
{path: 'userInfo', component: UserInfoComponent , canActivate: [AuthGuard] },
{path: 'userInfo/:id', component: UserInfoComponent , canActivate: [AuthGuard] },
{path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
