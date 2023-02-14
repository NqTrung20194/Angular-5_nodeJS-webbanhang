import { Component ,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import các component
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailCategoriesComponent } from './detail-categories/detail-categories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { from } from 'rxjs';

// gọi các gaurd vào
import{ CategoriesGuard } from'./categories/categories.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'lien-he',
    component: ContactComponent,
  },
  {
    path: 'danh-muc',
    component: CategoriesComponent,
    canActivate : [CategoriesGuard]
  },
  {
    path: 'danh-muc/:id',
    component: DetailCategoriesComponent,
  },
  {
    path: 'dang-nhap',
    component: LoginComponent ,
  },
  {
    path: 'dang-ky',
    component: RegisterComponent,
  },
  {
    path: 'san-pham/:id',
    component: ProductsComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
