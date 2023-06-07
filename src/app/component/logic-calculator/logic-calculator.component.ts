import { Component } from '@angular/core';


@Component({
  selector: 'app-logic-calculator',
  templateUrl: './logic-calculator.component.html',
  styleUrls: ['./logic-calculator.component.css']
})
export class LogicCalculatorComponent {
  principle: number = 0
  rate: number = 0
  time: number = 0
  duration: string = ""
  total: number = 0
  type: string = ""
  typeInput: string = ""
  isVisible: boolean = false
  handleSubmit(){
    if(this.type === "Simple Interest"){
      if(this.duration === "Month"){
        this.time = (this.time/12);
      }
      else if(this.duration === "Days"){
        this.time = (this.time/365);
      }
      this.total = (this.principle * this.rate * this.time)/100;
      this.total = Math.round(this.total)
    }
    else{
      if(this.duration === "Month"){
        this.time = (this.time/12);
      }
      else if(this.duration === "Days"){
        this.time = (this.time/365);
      }
      this.total = this.principle * Math.pow(1 + this.rate/100, this.time);
      this.total = this.total - this.principle;
      this.total = Math.round(this.total)
    }
    this.typeInput = this.type;
    this.principle = 0;
    this.rate = 0;
    this.time = 0;
    this.duration = '';
    this.isVisible = true;
  }
}
