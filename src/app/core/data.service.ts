import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Post } from '../post/post';
import { CustomError } from './error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private rootUrl:string = 'https://jsonplaceholder.typicode.com';
 

  constructor(private http: HttpClient) { }

  // get(path: string):Post[]{
  //   return this.http.get(this.rootUrl+"/"+path).;
  //  }

  saveAsync(model: Post,path: string):Observable<Post | CustomError> 
  {
   return this.http.post<Post>(this.rootUrl+"/"+path,model)
   .pipe(
      catchError(this.customErrLogger)
      );
  }

  getAsync(path: string):Observable<Post[] | CustomError> 
  {
   return this.http.get<Post[]>(this.rootUrl+"/"+path)
   .pipe(
      catchError(this.customErrLogger)
      );
  }
  
  private customErrLogger(res:HttpErrorResponse):Observable<CustomError>
  {
    let customError:CustomError={code:res.status,msg:res.statusText};
    return throwError(customError);
  }


}
