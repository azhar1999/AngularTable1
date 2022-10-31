import { Component, Renderer2, OnInit, ElementRef, ViewChild, AfterViewInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-tablecomp',
  templateUrl: './tablecomp.component.html',
  styleUrls: ['./tablecomp.component.css']
})


export class TablecompComponent {

  constructor() { }
  // ngOnInit(): void {
  // }

   togglevariable="";

  employeeDatas = [
    { employeeId: "1", employeeName: "Athila Rahim", employeeAge: "23" },
    { employeeId: "2", employeeName: "Akshay Poosan", employeeAge: "26" },
    { employeeId: "3", employeeName: "Hanan Binth Basheer", employeeAge: "24" },
    { employeeId: "4", employeeName: "Aysha Parveen", employeeAge: "23"},
    { employeeId: "5", employeeName: "Sreeram", employeeAge: "25" },
    { employeeId: "6", employeeName: "Darshan", employeeAge: "23"},
    { employeeId: "7", employeeName: "Afsal Rahman", employeeAge: "25"},
    { employeeId: "8", employeeName: "Fawaz MK", employeeAge: "22"},
    { employeeId: "9", employeeName: "Sharron", employeeAge: "22" },
    { employeeId: "10", employeeName: "Razal", employeeAge: "23"},

  ]

  toggle(val:any,input:any){
    this.togglevariable=val+input
  }


  changeEmpId(val1:any,i:any){
    this.employeeDatas[i].employeeId=val1;
    this.togglevariable=''
  }
  changeEmpName(val1:any,i:any){

    this.employeeDatas[i].employeeName=val1;
    this.togglevariable=''
  }
  changeEmpAge(val1:any,i:any){
    this.employeeDatas[i].employeeAge=val1;
    this.togglevariable='' 
  }
}














