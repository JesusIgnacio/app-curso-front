import { Component, OnInit } from '@angular/core';
import { Inscripcion } from 'src/app/model/inscripcion';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent {
  inscripcion: Inscripcion = new Inscripcion();
  constructor( private registroService: RegistroService) { }

   guardar() {
    console.log(this.inscripcion);
    this.registroService.registrarInscripcion(this.inscripcion)

  //   //.timeout(3000, new Error('timeout exceeded'))
     .subscribe(
       data =>  data,
       error => console.debug('ERROR', error),
       () => console.log('END')
     );
   }

}
