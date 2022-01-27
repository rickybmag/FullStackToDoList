import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CRUDToDoComponent } from './crudto-do/crudto-do.component';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { UpdateToDoComponent } from './update-to-do/update-to-do.component';
import { ToDo } from './ToDo';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,   
    CRUDToDoComponent,
    CreateToDoComponent,
    UpdateToDoComponent    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },      
      { path: 'crud', component: CRUDToDoComponent },
      { path: 'create', component: CreateToDoComponent },
      {path: 'update', component: UpdateToDoComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
