import { Component, OnInit, ViewChildren, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { MatCheckbox, MatCheckboxChange } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-material-checkbox-example',
  templateUrl: './material-checkbox-example.component.html',
  styleUrls: ['./material-checkbox-example.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class MaterialCheckboxExampleComponent implements OnInit {


  checkAll = false;
  check1 = false;
  check2 = false;
  check3 = false;
  check4 = false;
  check5 = false;
  checkBoxConjunto = false;
  modelo : Modelo;
  aparece = false;


  constructor() {   
    this.modelo = new Modelo();
   }	  


  ngOnInit() {	 

  }


  selectAll(event){   
    this.check1 = event;
    this.check2 = event;
    this.check3 = event;
    this.check4 = event;    
    this.check5 = event;
    console.log(event, 'SELECT ALL')

  }

  Check45(event){
    this.check4 = event;
    this.check5 = event;
  }

  LogaStatus(){
    console.log(this.checkAll, 'CHECKALL')
    console.log(this.check1, 'CHECK1')
    console.log(this.check2, 'CHECK2')
    console.log(this.check3, 'CHECK3')
    console.log(this.check4, 'CHECK4')
    console.log(this.check5, 'CHECK5')

    var abc : Modelo = new Modelo();
    abc.nome = "Rafael";
    abc.sobrenome = "ABDE";
    abc.teste = "ANDOKSADSA";
    this.modelo = abc;
  }

  mudaAparece(){
    this.aparece = (this.aparece) ? this.aparece = false : this.aparece = true;
  }



}

export class Modelo{

  public nome;
  public sobrenome;
  public teste;

  constructor(){} 

}