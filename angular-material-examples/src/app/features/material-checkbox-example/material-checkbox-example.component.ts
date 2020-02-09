import { Component, OnInit, ViewChildren } from '@angular/core';
import { MatCheckbox, MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-material-checkbox-example',
  templateUrl: './material-checkbox-example.component.html',
  styleUrls: ['./material-checkbox-example.component.css']
})
export class MaterialCheckboxExampleComponent implements OnInit {


  checkAll = false;
  check1 = false;
  check2 = false;
  check3 = false;
  check4 = false;
  check5 = false;
  checkBoxConjunto = false;


  constructor() { }	  


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
  }



}
