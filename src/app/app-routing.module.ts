import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TokyoComponent } from './tokyo/tokyo.component';
import { KyotoComponent } from './kyoto/kyoto.component';

const routes: Routes = [
  { path: 'Home', component:AppComponent },
  { path: 'About Me', component: AboutMeComponent},
  { path: 'Tokyo', component: TokyoComponent},
  { path: 'Kyoto', component: KyotoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
