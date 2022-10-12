import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { LuminariesChargeComponent } from './luminaries-charge/luminaries-charge.component';

const routes: Routes = [
  { path: 'analisis-grafico', component: LuminariesChargeComponent },
  { path: 'informacion-elemento', component: LuminariesChargeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
