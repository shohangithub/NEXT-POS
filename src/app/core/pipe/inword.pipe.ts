import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inword'
})
export class InwordPipe implements PipeTransform {

  transform(value: number, args: boolean = true): string {
    if (args) {
      let oString: string = '';
      if (value) {
        let strValue: string = value.toString();
        let arr: string[] = strValue.split('');

        arr.forEach((item, index) => {
          switch (item) {
            case '1':
              oString += 'One';
              break;
            case '2':
              oString += 'Two';
              break;
            case '3':
              oString += 'Three';
              break;
            case '4':
              oString += 'Four';
              break;
            case '5':
              oString += 'Five';
              break;
            case '6':
              oString += 'Six';
              break;
            case '7':
              oString += 'Seven';
              break;
            case '8':
              oString += 'Eight';
              break;
            case '9':
              oString += 'Nine';
              break;
            default:
              oString += 'Zero'
              break;
          }
        })
      }
      return oString;
    } else return value.toString();
  }
}
