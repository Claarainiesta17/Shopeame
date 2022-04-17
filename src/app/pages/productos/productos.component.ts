import { ProductosService } from './../../core/services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: any;

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getProductos()
    .subscribe((res: any) => {
      console.log(res);
      this.productos = res;
    });
  }


}
