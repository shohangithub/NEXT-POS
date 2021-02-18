import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNiValidation]'
})
export class NiValidationDirective {

  constructor(private el: ElementRef) { 
    let element=el.nativeElement
    
   //var isWatchEnabled = false;
  //var niValidation = attrs.niValidate === "" ? true : (typeof scope.$eval(attrs.niValidate) === "boolean" ? scope.$eval(attrs.niValidate) : true);
  // var masterForm = element.closest("[ni-isolate-form]").length === 0 ?
  //     element.closest('form').controller('form') : element.closest("[ni-isolate-form]").controller('form');


  // if (!masterForm) {
  //     var t = element.closest('ng-form');
  //     masterForm = element.closest('ng-form').controller('form');
  // }
   
  //var parentForm = element.closest("[validation-msg]")[0];


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
