import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { DeletePersonComponent } from './components/delete-person/delete-person.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    EditPersonComponent,
    DeletePersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}