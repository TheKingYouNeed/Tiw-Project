import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'produits',
    pathMatch: 'full'
  },
  {
    path: 'produits',
    loadComponent: () => import('./app/components/product-list/product-list.component')
      .then(m => m.ProductListComponent)
  },
  {
    path: 'ajouter-produit',
    loadComponent: () => import('./app/components/product-form/product-form.component')
      .then(m => m.ProductFormComponent)
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
