
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

// servicios
import { GmapsService } from './service/maps/gmaps.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { TwComponent } from './tw/tw/tw.component';

const routes: Routes = [
  {
    path: 'tw',
    redirectTo: 'TwComponent'
  },
  {
  path : '**',
  redirectTo: 'AppComponent'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TwComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsS_1laPKYy0eX3OxloEdLL4Mgt-aR4TE'
    }),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    GmapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
