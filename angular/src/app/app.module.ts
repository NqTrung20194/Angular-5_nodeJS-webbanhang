import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// gọi httpClientModule
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { DetailCategoriesComponent } from './detail-categories/detail-categories.component';

// gọi formModule
import{ FormsModule } from '@angular/forms';

// gọi reactiveformModule
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    CategoriesComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    MenuComponent,
    DetailCategoriesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
