import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UnidadeService } from '../unidade.service';
import { Unidade } from '../unidade';

@Component({
  selector: 'app-unidade-create',
  templateUrl: './unidade-create.component.html',
  styleUrls: ['./unidade-create.component.css']
})
export class UnidadeCreateComponent implements OnInit {

  unidade = new Unidade;
  submitted = false;
  constructor(private unidadeService: UnidadeService,
              private location: Location) { }
 
  ngOnInit() {
  }
 
  newUnidade(): void {
    this.submitted = false;
    this.unidade = new Unidade();
  }
 
 private save(): void {
   this.unidadeService.create(this.unidade);
 }
 
 onSubmit() {
   this.submitted = true;
   this.save();
 }
 
  goBack(): void {
    this.location.back();
  }


}
