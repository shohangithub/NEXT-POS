import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from 'src/global/global';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public localCache = new Map();
  // public validationMsg: ValidationMsg = {};



  constructor(private http: HttpClient) {
    this.getValidationMessageList();
  }

  //#region  Methods Implementation

  //get validation messagelist from server or cache
  public async getValidationMessageList(): Promise<void> {
    const validationFromCache = this.localCache.get('validationCache');
    if (validationFromCache) {
      return;
    } else {
     await this.http.get<any>('http://192.168.11.2:2000/adminservice/api/AppMessage/getValidationMessageList')
        .subscribe(res => {
          this.localCache.set('validationCache', res);
          this.setValidationMsg();
        }
        );
    }
  }
  //get validation message from cache
  public getValidationMessage(v_key: string) {
    let validations: any[];
    validations = this.localCache.get('validationCache');
    if (validations) {
      let v_Obj: any = validations.find(x => x.value === v_key);
      return v_Obj === null ? `There is no message for ${v_key}` : v_Obj.messageDescription;
    } else {
      return "There is no validation data !";
    }
  }

  //#endregion


  private setValidationMsg(): void {
    try {
     // this.validationMsg.buyer = this.getValidationMessage("Buyer");
     // this.validationMsg.item = this.getValidationMessage("Item");

      //Global

     Global.validationMsg.buyer = this.getValidationMessage("Buyer");
     Global.validationMsg.item = this.getValidationMessage("Item");

    } catch (ex) {
      throw ex;
    }
  }

}





// interface ValidationMsg {
//   [key: string]: any
// }


