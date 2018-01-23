import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UnidadeComponent } from './unidade/unidade.component';
import { UnidadeCreateComponent } from './unidade-create/unidade-create.component';
import { UnidadeDetailComponent } from './unidade-detail/unidade-detail.component';
import { OcorrenciaComponent } from './ocorrencia/ocorrencia.component';
import { OcorrenciaCreateComponent } from './ocorrencia-create/ocorrencia-create.component';
import { OcorrenciaDetailComponent } from './ocorrencia-detail/ocorrencia-detail.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { TerceiroCreateComponent } from './terceiro-create/terceiro-create.component';
import { TerceiroDetailComponent } from './terceiro-detail/terceiro-detail.component';
import { InsertCausaCreateComponent } from './insert-causa-create/insert-causa-create.component';
import { InsertActionCreateComponent } from './insert-action-create/insert-action-create.component';




const routes: Routes = [
  { path: '', redirectTo: '/ocorrencia-create', pathMatch: 'full' },
  { path: 'ocorrencia-create', component: OcorrenciaCreateComponent },
  { path: 'unidade-create', component: UnidadeCreateComponent },
  { path: 'terceiro-create', component: TerceiroCreateComponent },
  { path: 'insert-action-create', component: InsertActionCreateComponent },
  { path: 'insert-causa-create', component: InsertCausaCreateComponent },
  { path: 'ocorrencia', component: OcorrenciaComponent },
  { path: 'ocorrencia-detail/:id', component: OcorrenciaComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
