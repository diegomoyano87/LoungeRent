import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PruebaComponent } from './component/prueba/prueba.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BuyerRegistrationComponent } from './component/buyer-registration/buyer-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

//Rutas
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AgregarProductoComponent } from './component/agregar-producto/agregar-producto.component';
import { AgregarProductoModalComponent } from './component/agregar-producto-modal/agregar-producto-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerRegistrationComponent,
    AgregarProductoComponent,
    AgregarProductoModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSlideToggleModule,
    NavbarComponent,  
    PruebaComponent, 
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

