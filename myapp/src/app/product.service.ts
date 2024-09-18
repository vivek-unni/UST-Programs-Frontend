import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from './Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  saveProduct(product: Product):Observable<Object>{
    let url='http://localhost:5000/create';
    return this.http.post(url,product);
  }

  displayAll():Observable<Product[]>{
    let url='http://localhost:5000/getall';
    return this.http.get<Product[]>(url);
  }

  displayById(productId: string):Observable<Product>{
    const url = `${this.apiUrl}/get/${productId}`;
    return this.http.get<Product>(url);
  }

  displayByBrand(brand: string):Observable<Product>{
    const url = `${this.apiUrl}/get/brand/${brand}`;
    return this.http.get<Product>(url);
  }
}
