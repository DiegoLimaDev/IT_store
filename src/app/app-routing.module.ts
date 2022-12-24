import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./components/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
