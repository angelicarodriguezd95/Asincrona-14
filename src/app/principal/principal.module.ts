import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { Hijo2Component } from './hijo2/hijo2.component';



@NgModule({
  declarations: [
    PadreComponent,
    HijoComponent,
    Hijo2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PadreComponent,
    HijoComponent,
    Hijo2Component
  ]
})
export class PrincipalModule { }
