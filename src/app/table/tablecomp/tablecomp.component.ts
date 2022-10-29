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

  // color="yellow";

  employeeDatas = [
    { employeeId: "1", employeeName: "Athila Rahim", employeeAge: "23" ,visible:false},
    { employeeId: "2", employeeName: "Akshay Poosan", employeeAge: "26",visible:false },
    { employeeId: "3", employeeName: "Hanan Binth Basheer", employeeAge: "24",visible:false },
    { employeeId: "4", employeeName: "Aysha Parveen", employeeAge: "23",visible:false },
    { employeeId: "5", employeeName: "Sreeram", employeeAge: "25",visible:false },
    { employeeId: "6", employeeName: "Darshan", employeeAge: "23",visible:false },
    { employeeId: "7", employeeName: "Afsal Rahman", employeeAge: "25",visible:false },
    { employeeId: "8", employeeName: "Fawaz MK", employeeAge: "22",visible:false },
    { employeeId: "9", employeeName: "Sharron", employeeAge: "22" ,visible:false},
    { employeeId: "10", employeeName: "Razal", employeeAge: "23",visible:false },

  ]

  changeEmpId(val:any,i:any){
    this.employeeDatas[i].employeeId=val;
    this.employeeDatas[i].visible=false  
  }
  changeEmpName(val:any,i:any){
    this.employeeDatas[i].employeeName=val;
    this.employeeDatas[i].visible=false
  }
  changeEmpAge(val:any,i:any){
    this.employeeDatas[i].employeeAge=val;
    this.employeeDatas[i].visible=false
  }
  


}














