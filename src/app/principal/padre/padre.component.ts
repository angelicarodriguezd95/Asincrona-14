import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  showMessage = false;
  datosForm = { nombre: '', dni: '', estadoCivil: '' };
  estadoCivil: any;
  nombre: any;
  dni: any;

  enviarDatos() {
    this.showMessage = true;
    this.datosForm = { nombre: this.nombre, dni: this.dni, estadoCivil: this.estadoCivil };
  }

  resetForm() {
    this.nombre = '';
    this.dni = '';
    this.estadoCivil = '';
    this.showMessage = false;
  }
}
