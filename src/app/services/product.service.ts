import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Product {
  id: string;
  title: string;
  price: string;
  images: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    const url = new URL(`https://api.escuelajs.co/api/v1/products`);
    return this.http.get<Product[]>(url.toString());
  }
}