import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http
    .get('http://localhost:3000/products')
  }

  getProducto(idProductos: any) {
    return this.http
    .get('http://localhost:3000/products/' + idProductos)
  }

  postProduct(createdProducto: any){
    return this.http.get('http://localhost:3000/products', createdProducto)
  }

  /*putProduct(){
    return this.http.put('http://localhost:3000/products', )
  }*/
}
