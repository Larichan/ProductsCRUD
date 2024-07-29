import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http'
import { Product } from './product.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';

interface PaginatedProduct {
  first: number,
	prev: number | null,
	next: number | null,
	last: number,
	pages: number,
	items: number,
	data: Product[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(result => result),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(result => result),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(result => result),
      catchError(e => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(result => result),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(result => result),
      catchError(e => this.errorHandler(e))
    );
  }

  readPaginated(page: number, size: number): Observable<PaginatedProduct> {
    console.log(this.baseUrl+'?_page='+page+'&_per_page='+size)
    return this.http.get<PaginatedProduct>(this.baseUrl+'?_page='+page+'&_per_page='+size).pipe(
      map(result => result),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any) : Observable<any> {
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }
}
