import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.guard';
import { AuthService } from './auth/auth.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadBlogComponent } from './read-blog/read-blog.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent,},
  { path: 'signin', component: SignInComponent,},
  { path: 'dashboard', component: DashboardComponent,
  // canActivate: [AuthGuard]
},
{ path: 'create-blog', component: CreateBlogComponent},
{ path: 'read-blog/:id', component: ReadBlogComponent},
{ path: 'myblogs', component: MyBlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
