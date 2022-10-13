import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { LuminariesChargeComponent } from './luminaries-charge/luminaries-charge.component';

const routes: Routes = [
  { path: 'analisis-grafico', component: ChartDetailComponent },
  { path: 'informacion-elemento', component: LuminariesChargeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
