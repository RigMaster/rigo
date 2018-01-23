import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TerceiroService } from './terceiro.service';
import { OcorrenciaService } from './ocorrencia.service';
import { UnidadeService } from './unidade.service';
import { CausaService } from './causa.service';
import { AcaoService } from './acao.service';




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
import { AppRoutingModule } from './/app-routing.module';
import { RigoComponent } from './rigo/rigo.component';


@NgModule({
  declarations: [
    AppComponent,
    UnidadeComponent,
    UnidadeCreateComponent,
    UnidadeDetailComponent,
    OcorrenciaComponent,
    OcorrenciaCreateComponent,
    OcorrenciaDetailComponent,
    TerceiroComponent,
    TerceiroCreateComponent,
    TerceiroDetailComponent,
    InsertCausaCreateComponent,
    InsertActionCreateComponent,
    RigoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AcaoService,
    TerceiroService,
    OcorrenciaService,
    CausaService,
    UnidadeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
