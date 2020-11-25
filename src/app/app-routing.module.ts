import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsComponent } from './gifs/gifs.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
	{ path: '', component: SearchComponent },
  { path: 'results/:searchTerm', component: GifsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }