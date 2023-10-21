import { ComentariosComponent } from './comentarios.model';
import { InscripcionComponent } from './inscripcion.model';

export interface CursosComponent{

  nombreCurso:string;
  descripcionCurso:string;
  instructor:string;
  modulosCurso:any[];
  modulosComentario?:ComentariosComponent[];
  cursoIncripcion?:InscripcionComponent[];
  imagenCurso: {imagenUrl:string};
}
