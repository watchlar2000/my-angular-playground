import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsPlaygroundComponent } from './modules/rxjs-playground/rxjs-playground.component';

const routes: Routes = [
  { path: '', redirectTo: '/rxjs-playground', pathMatch: 'full' },
  { path: 'rxjs-playground', component: RxjsPlaygroundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
