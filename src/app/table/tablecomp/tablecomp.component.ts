import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablecomp',
  templateUrl: './tablecomp.component.html',
  styleUrls: ['./tablecomp.component.css']
})


export class TablecompComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  // color="yellow";

   employeeDatas=[
                {employeeId:"1",employeeName:"Athila Rahim",employeeAge:"23"},
                {employeeId:"2",employeeName:"Akshay Poosan",employeeAge:"26"},
                {employeeId:"3",employeeName:"Hanan Binth Basheer",employeeAge:"24"},
                {employeeId:"4",employeeName:"Aysha Parveen",employeeAge:"23"},
                {employeeId:"5",employeeName:"Sreeram",employeeAge:"25"},
                {employeeId:"6",employeeName:"Darshan",employeeAge:"23"},
                {employeeId:"7",employeeName:"Afsal Rahman",employeeAge:"25"},
                {employeeId:"8",employeeName:"Fawaz MK",employeeAge:"22"},
                {employeeId:"9",employeeName:"Sharron",employeeAge:"22"},
                {employeeId:"10",employeeName:"Razal",employeeAge:"23"},

              ]


  hello(value:string,emp:string){
    
    
    
    
    var g = document.getElementById(value) as HTMLInputElement
    
    var Array:any=[]
    Array=this.employeeDatas

    var curr ="";
    curr=`${g.id}`
    // console.log(f);
    
    g.innerHTML=`<td id=${curr}><input type="text" id="input" name="fname"> <button id ="submit" class="button">submit</button></td>`

    let backbutton = document.getElementById('submit')
    backbutton?.addEventListener('click', function handleClick(event) {
      var value = (document.getElementById("input") as HTMLInputElement).value as string

      display(curr,value,emp,Array)

    })
    

  }

}

function display(curr: string, value: string,emp:string,empDatas:any) {


  for (var i=0;i<empDatas.length;i++){
    if(emp=='employeeId'){

      if (empDatas[i].employeeId==curr){
          empDatas[i].employeeId=value
      }

    }

  }

  var disp = document.querySelector(".tableBody") as HTMLInputElement
  disp.innerHTML="";

  for(var j=0;j<empDatas.length;j++){
    disp.innerHTML+=` <tr >
    <td appHighlight (dblclick)="hello(emp.employeeId,'employeeId')" id ={{emp.employeeId}} >{{emp.employeeId}}</td>
    <td appHighlight  id ={{emp.employeeId}}>{{emp.employeeName}}</td>
    <td appHighlight  id ={{emp.employeeId}}>{{emp.employeeAge}}</td>
</tr>`

  }
  
  
  
  
  

  
  
}

