import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system/system.service';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  get url() { return `${this.sys.config.baseurl}/api/products`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Product[]> {
    return this.http.get(`${this.url}`) as Observable<Product[]>;
  }
  get(id: number): Observable<Product> {
    return this.http.get(`${this.url}/${id}`) as Observable<Product>;
  }
  create(prod: Product): Observable<Product> {
    return this.http.post(`${this.url}`, prod) as Observable<Product>;
  }
  change(prod: Product): Observable<any> {
    return this.http.put(`${this.url}/${prod.id}`, prod) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
