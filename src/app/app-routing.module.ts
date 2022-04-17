import { ProductosDetailComponent } from './pages/productos-detail/productos-detail.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: "full", component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:idProductos', component: ProductosDetailComponent},
  {path: 'gestion', component: GestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
