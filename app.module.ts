import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ReadBlogComponent } from './read-blog/read-blog.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { Interceptor } from './auth/interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from './auth/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    CreateBlogComponent,
    ReadBlogComponent,
    MyBlogsComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
   providers: [
      AuthService,
      { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
