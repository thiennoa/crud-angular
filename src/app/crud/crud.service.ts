// import { Injectable } from '@angular/core';

// //add
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import {  throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Product } from './product';

// @Injectable({
//   providedIn: 'root'
// })
// export class CrudService {
//   //add
//   private apiServer = "http://localhost:3000";
//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   }

//   constructor(private httpClient: HttpClient) { } // add: private httpClient: HttpClient

//   create(product): Observable<Product> {
//     return this.httpClient.post<Product>(this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }  
//   getById(id): Observable<Product> {
//     return this.httpClient.get<Product>(this.apiServer + '/products/' + id)
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }

//   getAll(): Observable<Product[]> {
//     return this.httpClient.get<Product[]>(this.apiServer + '/products/')
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }

//   update(id, product): Observable<Product> {
//     return this.httpClient.put<Product>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }

//   delete(id){
//     return this.httpClient.delete<Product>(this.apiServer + '/products/' + id, this.httpOptions)
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }
//   errorHandler(error) {
//      let errorMessage = '';
//      if(error.error instanceof ErrorEvent) {
//        // Get client-side error
//        errorMessage = error.error.message;
//      } else {
//        // Get server-side error
//        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//      }
//      console.log(errorMessage);
//      return throwError(errorMessage);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  // Phương thức tạo sản phẩm
  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  // Phương thức lấy sản phẩm theo ID
  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiServer}/products/${id}`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  // Phương thức lấy tất cả sản phẩm
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/products/')
    .pipe(
      catchError(this.errorHandler)
    );
  }

  // Phương thức cập nhật sản phẩm
  update(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.apiServer}/products/${id}`, JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  // Phương thức xóa sản phẩm
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServer}/products/${id}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  // Xử lý lỗi
  private errorHandler(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
