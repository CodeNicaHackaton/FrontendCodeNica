import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { CursosComponent } from './cursos.model';

@Component({
  selector: 'app-all-cursos',
  templateUrl: './all-cursos.component.html',
  styleUrls: ['./all-cursos.component.css']
})
export class AllCursosComponent implements OnInit {

  cursosAll:CursosComponent[]=[];

  constructor(private cursosService:CursosService){}
  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe(
      (data: any) => {
        this.cursosAll = data.$values;
        console.log(this.cursosAll);
      },
      (error) => {
        console.error('Error al obtener cursos', error);
      }
    );

  }


}
