import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-producto-modal',
  templateUrl: './agregar-producto-modal.component.html',
  styleUrls: ['./agregar-producto-modal.component.css']
})
export class AgregarProductoModalComponent {
  fotoSerializada: string | ArrayBuffer | null = null;
  http: any;
  

  constructor(public dialogRef: MatDialogRef<AgregarProductoModalComponent>) {}

  subirFoto(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      this.fotoSerializada = reader.result;
    };

    reader.readAsDataURL(file);
  }

  crearProducto(): void {
    // Objeto contenedor de los datos del formulario.
    const producto = {
      nombre: 'Nombre del producto',
      categoria: 'Empresarial',
      precioEvento: 100,
      cantidadDisponible: 10,
      detalle: 'Detalle del producto',
      foto: this.fotoSerializada
    };

    //Servicio HTTP de Angular para enviar estos datos al backend.
    this.http.post('URL_API', producto).subscribe((response: any) => {
      console.log('Producto creado exitosamente', response);

      this.dialogRef.close();
    }, (error: any) => {
    
      console.error('Error al crear el producto', error);
    });
  }
}
