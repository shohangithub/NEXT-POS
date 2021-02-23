import { ComponentRef, Directive, ElementRef,HostListener,Renderer2, ViewContainerRef } from '@angular/core';
import { BuyerComponent } from 'src/app/buyer/buyer/buyer.component';

@Directive({
  selector: '[appNiValidation]'
})
export class NiValidationDirective {
   private directiveName:string ='appnivalidation';
   private element:any={};
  constructor(private el: ElementRef,private _viewContainerRef: ViewContainerRef,private renderer: Renderer2) { 
    debugger
    this.element=el.nativeElement;

    }


    
    @HostListener('mouseenter') onMouseEnter() {
      this.validator();
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.validator();
    }
    // let attObj:NamedNodeMap = element.attributes;
    // for (const [key, value] of Object.entries(attObj)) {
    //    if(value.name === '')
    //    console.log(value.name)
    // }
    //let attList = Object.keys(attObj);
    
    // .forEach((x:any) => {
    //   console.log(x);
    // });

 
    
   //var isWatchEnabled = false;
  //var niValidation = attrs.niValidate === "" ? true : (typeof scope.$eval(attrs.niValidate) === "boolean" ? scope.$eval(attrs.niValidate) : true);
  // var masterForm = element.closest("[ni-isolate-form]").length === 0 ?
  //     element.closest('form').controller('form') : element.closest("[ni-isolate-form]").controller('form');


  // if (!masterForm) {
  //     var t = element.closest('ng-form');
  //     masterForm = element.closest('ng-form').controller('form');
  // }
   
  //var parentForm = element.closest("[validation-msg]")[0];

  
  validator():void{

    let hasValidator = this.hasValidator(this.directiveName);
    let component = (<any>this._viewContainerRef)['_hostLView'][8];
     
    if (hasValidator){

      let validationObjProp = this.getValidationMsg(this.element.form);
      if(validationObjProp !=""){
        let validationProp =this.read_prop(component,validationObjProp);
        
        
        this.element.value
       
      }
   
    }
  }


   requiredValidator(value:string, errorMsg:string) {
    try {
        // if (typeof value === "string") {
        //     var dataValue = value ? parseFloat(value, 10) : value;
        //     if (!isNaN(dataValue)) {
        //         value = dataValue;
        //     }
        // }

        if (typeof value === "string") {
            if (value.length > 0) { //VALID PART
                return this.removeError('required');
            } else { //INVALID PART
                return this.setError('required', errorMsg);
            }
        } else if (typeof value === "number") {
            if (value !== 0) { //VALID PART
                return this.removeError('required');
            } else { //INVALID PART
                return this.setError('required', errorMsg);
            }
        } else {
            if (value !== null) { //VALID PART
                return this.removeError('required');
            } else { //INVALID PART
                return this.setError('required', errorMsg);
            }
        }



        
    } catch (e) {
        throw e;
    }
}

  setError(validationType:string, errorMsg:string):boolean {
    return true;
  }

 removeError(validationType:string):boolean {
  try {
      return false;
  } catch (e) {
      throw e;
  }
}
  
   read_prop(obj:any, prop:string) {
     let arr = prop.split('.');
     arr.forEach(e => {
      obj = obj[e];
     });
    return obj;
   }
  

  hasValidator(validatorName:string): boolean{
    
    let attObj:NamedNodeMap = this.element.attributes;
    for (const [key, value] of Object.entries(attObj)) {
       if(value.name === validatorName)
       console.log(value.name)
    }
    return true;
  }
  getValidationMsg(el:any): string{
    
    let attObj:NamedNodeMap = el.attributes;
    
    for (const [key, value] of Object.entries(attObj)) {
        if(value.name =='validation-msg') return value.value;
    }
    return "";
  }
  
  // //var isWatchEnabled = false;
  // var niValidation = attrs.niValidate === "" ? true : (typeof scope.$eval(attrs.niValidate) === "boolean" ? scope.$eval(attrs.niValidate) : true);
  // var masterForm = element.closest("[ni-isolate-form]").length === 0 ?
  //     element.closest('form').controller('form') : element.closest("[ni-isolate-form]").controller('form');


  // if (!masterForm) {
  //     var t = element.closest('ng-form');
  //     masterForm = element.closest('ng-form').controller('form');
  // }


  // masterForm.validationSummaryMsgs = [];
  // var uniqueGroup = scope.controllerName + scope.$id;

  // if (masterForm.formControllerTree === undefined) {
  //     masterForm.formControllerTree = {};
  // }
  // if (masterForm.formControllerTree[ctrl[1].$name] === undefined)
  //     masterForm.formControllerTree[ctrl[1].$name] = [];
  // if (masterForm.formControllerTree[ctrl[1].$name].indexOf(uniqueGroup) === -1)
  //     masterForm.formControllerTree[ctrl[1].$name].push(uniqueGroup);

  // //ng-form Name and given controller name
  // var formCtrlName = ctrl[1].$name + uniqueGroup;

  // //Get Validation Maseges according to property
      

  
}
