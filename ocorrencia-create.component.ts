import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from '../ocorrencia';
import { Location } from '@angular/common';
import { OcorrenciaService } from '../ocorrencia.service';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Unidade } from '../unidade';
import { Terceiro } from '../terceiro';
import { UnidadeService } from '../unidade.service';
import { TerceiroService } from  '../terceiro.service';


@Component({
  selector: 'app-ocorrencia-create',
  templateUrl: './ocorrencia-create.component.html',
  styleUrls: ['./ocorrencia-create.component.css']
})
export class OcorrenciaCreateComponent implements OnInit {

  
  
  ocorrencia = new Ocorrencia;
  submitted = false;
  public terceiro : Terceiro[]; //create a vaiable of type Terceiro
  terceiroform : FormGroup;
  public unidade : Unidade[]; // create variable of type of unidade
  unidadeform : FormGroup;
  public actionform : FormGroup;
  constructor(private unidaService: UnidadeService, fb : FormBuilder,private ocorrenciaService:OcorrenciaService,private terceiroService:TerceiroService ,
              private location: Location) { 
                this.terceiroform = fb.group({
                  //we will use this property in html page
                  'TerceiroId': [null]
                }),
                this.unidadeform = fb.group({
                  'UnidadeId': [null]    // to be used in html page
                })
              }      
                     
                ngOnInit() {
                    // we initialise its loading here in ngOnInit
                    this.getUnidade();
                    this.getTerceiro();
                }
            
 

  
  getUnidade() {
    this.unidaService.getUnidade().subscribe(
      unidade => {
        this.unidade = unidade;
      },
      err => {
        console.log(err);
      }
    );
  }
  getTerceiro() {
    this.terceiroService.getTerceiro().subscribe(
      terceiro => {
        this.terceiro = terceiro;
      },
      err => {
        console.log(err);
      }
    );
  }

  


 
  newOcorrencia(): void {
    this.submitted = false;
    this.ocorrencia = new Ocorrencia();
  }
 
 private save(): void {
   this.ocorrenciaService.create(this.ocorrencia);
 }
 
 onSubmit() {
   this.submitted = true;
   this.save();
 }
 
  goBack(): void {
    this.location.back();
  }

}
