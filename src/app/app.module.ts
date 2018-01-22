import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { Route } from '@angular/compiler/src/core';
import { AccountsList } from './components/accounts-list/accounts-list.component';
import { AccountFormComponent } from './components/account-form/account-form.component';

const appRoutes: Routes = [
  {
    path: ':id',
    component: UserComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**', 
  component: UserComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    AccountsList,
    AccountFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
