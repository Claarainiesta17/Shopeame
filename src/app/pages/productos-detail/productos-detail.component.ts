import { ProductosService } from './../../core/services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productos-detail',
  templateUrl: './productos-detail.component.html',
  styleUrls: ['./productos-detail.component.scss']
})
export class ProductosDetailComponent implements OnInit {
  producto: any;

  constructor(private activatedRoute: ActivatedRoute, private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      this.productosService.getProducto(params.get("idProductos")).subscribe(producto => {
        this.producto = producto
      })
    })

}}

