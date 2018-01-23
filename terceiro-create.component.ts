import { Component, OnInit } from '@angular/core';
import { Terceiro } from '../terceiro';
import { Location } from '@angular/common';
import { TerceiroService } from '../terceiro.service';






@Component({
  selector: 'app-terceiro-create',
  templateUrl: './terceiro-create.component.html',
  styleUrls: ['./terceiro-create.component.css']
})
export class TerceiroCreateComponent implements OnInit {


  terceiro = new Terceiro;
  submitted = false;
  constructor(private terceiroService: TerceiroService,
              private location: Location) { }
 
  ngOnInit() {
  }
 
  newTerceiro(): void {
    this.submitted = false;
    this.terceiro = new Terceiro();
  }
 
 private save(): void {
   this.terceiroService.create(this.terceiro);
 }
 
 onSubmit() {
   this.submitted = true;
   this.save();
 }
 
  goBack(): void {
    this.location.back();
  }


}
