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

  employeeDatas = [
    { employeeId: "1", employeeName: "Athila Rahim", employeeAge: "23" ,visible:""},
    { employeeId: "2", employeeName: "Akshay Poosan", employeeAge: "26",visible:"" },
    { employeeId: "3", employeeName: "Hanan Binth Basheer", employeeAge: "24",visible:"" },
    { employeeId: "4", employeeName: "Aysha Parveen", employeeAge: "23",visible:"" },
    { employeeId: "5", employeeName: "Sreeram", employeeAge: "25",visible:"" },
    { employeeId: "6", employeeName: "Darshan", employeeAge: "23",visible:"" },
    { employeeId: "7", employeeName: "Afsal Rahman", employeeAge: "25",visible:"" },
    { employeeId: "8", employeeName: "Fawaz MK", employeeAge: "22",visible:"" },
    { employeeId: "9", employeeName: "Sharron", employeeAge: "22" ,visible:""},
    { employeeId: "10", employeeName: "Razal", employeeAge: "23",visible:"" },

  ]

  changeEmpId(val1:any,i:any){
    this.employeeDatas[i].employeeId=val1;

    this.employeeDatas[i].visible=''  
  }
  changeEmpName(val1:any,i:any){

    this.employeeDatas[i].employeeName=val1;

    this.employeeDatas[i].visible=''  
  }
  changeEmpAge(val1:any,i:any){
    this.employeeDatas[i].employeeAge=val1;
    this.employeeDatas[i].visible=''  
  }
}














