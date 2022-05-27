import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/components/home/home.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthModule } from './auth/auth.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';

// Here we create route

const routes=[
  {path:'',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component: RegisterComponent}

]



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  // import routemodule and used function forroot used routes class
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes),
    AuthModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
