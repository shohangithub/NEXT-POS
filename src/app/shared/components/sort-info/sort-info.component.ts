import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ni-sort-info',
  templateUrl: './sort-info.component.html',
  styleUrls: ['./sort-info.component.css']
})
export class SortInfoComponent implements OnInit {
  @Input() input: ISort[]=[];
  @Output() output = new EventEmitter<string>();
  constructor() { 

  }

  ngOnInit(): void {
    console.log(this.input);
    // this.item.map((data: ISort) =>{
    // console.log(data);
    // // const model: ISort={isCheck:false,field:"",orderNo:0};
    // //     Object.assign(model, data);
    // //     if(data.field){
    // //         model.field = data.field;
    // //      }else{
    // //         model.field = '';
    // //      }
    // //      console.log(model)
 

    // });
    
  }

  onChecked():void{
    console.log(this.input);
    let mappedStr:string="";
    this.input.filter(x=>x.isCheck)
    .sort(x=>x.orderNo)
    .map(x=>{
      mappedStr+=x.field;
    })
    this.output.emit(mappedStr);
  }
}


interface ISort{
  isCheck:boolean;
  field:string;
  orderNo:number;
}