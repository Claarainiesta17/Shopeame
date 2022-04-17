import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/core/services/productos.service';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  contactForm: FormGroup;

  submitted: boolean = false

  createdProduct: any;

  constructor(private formBuilder: FormBuilder, private productosService: ProductosService) {
    this.contactForm = this.formBuilder.group({
      NombreDelProducto: ['', [Validators.required]],
      Precio: ['', [Validators.required]],
      Descripción: ['', [Validators.required]],
      RutaDeLaImagen: ['', [Validators.required]],
      Opiniones: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.contactForm);
    console.log(this.contactForm.value);
    if (this.contactForm.valid){
      const newProduct: any ={
        NombreDelProducto: this.contactForm.get('name')?.value,
        Precio: this.contactForm.get('price')?.value,
        Descripción: this.contactForm.get('description')?.value,
        image: this.contactForm.get('image')?.value,
        Opiniones: this.contactForm.get('opinions')?.value
      }
      console.log('Este sería el nuevo producto: ' ,newProduct)
      this.createdProduct = newProduct;
      console.log(this.createdProduct);
      this.productosService.postProduct(newProduct).subscribe();
    }
  }

  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe((changes) => {
      console.log(changes)
    this.createdProduct = changes;
    })

  }

}
