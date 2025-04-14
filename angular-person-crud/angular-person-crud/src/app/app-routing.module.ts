import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { DeletePersonComponent } from './components/delete-person/delete-person.component';

const routes: Routes = [
  { path: '', component: ListPeopleComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'delete/:id', component: DeletePersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}