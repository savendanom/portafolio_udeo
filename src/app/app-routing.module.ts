import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
{path: 'home', component: PortafolioComponent},
{path: 'about', component: AboutComponent},
{path: 'item', component: ItemComponent},
{path: 'productos', component: ProductosComponent},
{path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//todo #hash
  exports: [RouterModule]//Exportamos la ruta para poderlas usar
})
export class AppRoutingModule { }
