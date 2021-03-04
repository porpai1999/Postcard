import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FootterComponent } from './footter/footter.component';
import { PostComponent } from './post/post.component';
import { PostFremeComponent } from './post-freme/post-freme.component';
import { PostFrameComponent } from './post-frame/post-frame.component';
import { FooterComponent } from './footer/footer.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    FootterComponent,
    PostComponent,
    PostFremeComponent,
<<<<<<< HEAD
    PostFrameComponent,
    FooterComponent
=======
    AccordionModule,
>>>>>>> 5580cb65124164967169f64def668c7015e2e049
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
