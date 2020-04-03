import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragdropexampleComponent } from './dragdropexample/dragdropexample.component';


const routes: Routes = [
  {path: 'dragdrop-example', component: DragdropexampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
